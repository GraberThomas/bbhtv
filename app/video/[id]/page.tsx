import { Video } from '@/app/libs/api/types/videos'
import { fetchVideo } from '@/app/libs/api/video'
import { sizeTopBar } from '@/app/ui/size'
import Image from 'next/image'
import { fetchOrGetImage } from '@/app/libs/api/image'
import { getDiffenceDate } from '@/app/libs/utils/playlistInfo'

const Page = async ({ params }: { params: { id: string } }) => {
    const video: Video = await fetchVideo(params.id)

    const coverImage = await fetchOrGetImage(video.cover)

    const postDay = getDiffenceDate(video.date_published)

    return (
        <main
            className={'w-full'}
            style={{
                minHeight: `calc(100vh)`,
                marginTop: `${sizeTopBar}px`,
            }}
        >
            <section
                className={
                    'relative mb-[60px] min-h-[900px] w-[full] max-[1400px]:min-h-[calc(100vw/1.75)]'
                }
            >
                <div
                    className={
                        'absolute right-1/2 top-1/2 h-[90%] w-[1728px] -translate-y-1/2 translate-x-1/2 max-[1400px]:w-[100vw]'
                    }
                >
                    <Image
                        src={coverImage}
                        alt={'Cover of video'}
                        width={0}
                        height={0}
                        sizes={'100vh'}
                        style={{
                            width: 'auto',
                            height: '100%',
                            borderRadius: '8px',
                            top: '50%',
                            right: '50%',
                            position: 'absolute',
                            transform: 'translate(50%, -50%)',
                        }}
                    />
                </div>
            </section>
            <section className={'flex w-full items-center justify-center'}>
                <div className={'flex w-1/2 flex-col gap-4'}>
                    <h1 className={'drunkTitle1'}>{video.title}</h1>
                    <span className={'textMdRegular opacity-70'}>
                        {postDay !== 0
                            ? `Il y a ${postDay} jours`
                            : "Aujourd'hui"}
                    </span>
                    <p className={'textLgRegular text-gris-00'}>
                        {video.description}
                    </p>
                    <div className={'flex'}>
                        <div
                            className={
                                'flex flex-col items-center justify-center border-r border-white border-opacity-100 p-1 pr-6'
                            }
                        >
                            <span className={'ibmTitle3'}>
                                {video.view_count}
                            </span>
                            <span className={'ibmTitle4 opacity-50'}>Vues</span>
                        </div>
                        <div
                            className={
                                'flex flex-col items-center justify-center gap-2 pl-6'
                            }
                        >
                            <span className={'ibmTitle3'}>
                                {video.like_count}
                            </span>
                            <span className={'ibmTitle4 opacity-50'}>
                                J&apos;aime
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Page
