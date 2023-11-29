import { sizeTopBar } from '@/app/ui/size'
import { fetchVideosOfPlaylist } from '@/app/libs/api/video'
import { Playlist } from '@/app/libs/api/types/playlist'
import { FetchPlayList } from '@/app/libs/api/playlist'
import { getTotalViewString } from '@/app/libs/utils/playlistInfo'
import { buttonDirection, buttonSize } from '@/app/ui/buttons/Button'
import ReturnButton from '@/app/components/button/returnButton'
import Image from 'next/image'
import { fetchOrGetLastCoverImage } from '@/app/libs/api/image'

export default async function Page({ params }: { params: { id: string } }) {
    const play_list_id = Number.parseInt(params.id)

    const videosOfPlaylist = await fetchVideosOfPlaylist(play_list_id)

    const lastCoverImage: string =
        await fetchOrGetLastCoverImage(videosOfPlaylist)

    const playlist: Playlist = await FetchPlayList(play_list_id)

    return (
        <main
            className={'w-full'}
            style={{
                minHeight: `calc(100vh)`,
            }}
        >
            <section
                className={
                    'relative flex w-full flex-col px-[80pX] backdrop-blur-xl'
                }
                style={{
                    paddingTop: `${sizeTopBar + 34}px`,
                }}
            >
                <div
                    className={
                        'bg absolute bottom-0 left-0 right-0 top-0 z-0 opacity-40 blur-3xl'
                    }
                    style={{
                        backgroundImage: `url('${lastCoverImage}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                ></div>
                <div className={'mb-[54px] w-full grow'}>
                    <ReturnButton
                        bgColor={'blur'}
                        size={buttonSize.BASE}
                        direction={buttonDirection.LEFT}
                        className={'w-fit'}
                    >
                        Retour
                    </ReturnButton>
                </div>
                <div className={'relative flex h-[400px]'}>
                    <div
                        className={
                            'wra mr-auto flex h-auto w-[55%] flex-col gap-[32px]'
                        }
                    >
                        <div className={'flex items-center gap-[18px]'}>
                            <h1 className={'drunkTitle1 uppercase'}>
                                {playlist.title}
                            </h1>
                            <span className={'textLgRegular opacity-50'}>
                                {getTotalViewString(videosOfPlaylist)}
                            </span>
                        </div>
                        <p
                            className={
                                'text-gris-00 textLgRegular overflow-y-scroll'
                            }
                        >
                            {playlist.description}
                        </p>
                    </div>

                    <div className={'absolute bottom-0 right-0 h-fit w-[40%]'}>
                        <Image
                            src={lastCoverImage}
                            alt={'Cover of last videos'}
                            width={0}
                            height={0}
                            sizes={'100vh'}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                maxWidth: '750px',
                            }}
                        />
                    </div>
                </div>
                <span></span>
            </section>
        </main>
    )
}
