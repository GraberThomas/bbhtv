'use client'

import { Playlist } from '@/app/libs/api/types/playlist'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Button, { buttonDirection, buttonSize } from '@/app/ui/buttons/Button'
import Link from 'next/link'
import { sizeTopBar } from '@/app/ui/size'
import { fetchOrGetImage } from '@/app/libs/api/image'

type PlayListSelectorProps = {
    playlists: Playlist[]
}

const PlayListSelector = ({ playlists }: PlayListSelectorProps) => {
    const [selectedPlaylist, setSelectedPlaylist] = useState<number>(0)

    const [image, setImage] = useState<string>('')

    const refSectionToBackground = useRef<HTMLDivElement>(null)

    useEffect(() => {
        try {
            fetchOrGetImage(playlists[selectedPlaylist].cover).then((res) =>
                setImage(res)
            )
        } catch (e) {
            console.log('ERROR')
        }
    }, [playlists, selectedPlaylist])

    useEffect(() => {
        if (refSectionToBackground.current) {
            refSectionToBackground.current.style.backgroundImage = `url(${image})`
        }
    }, [image])

    return (
        <div className={'flex gap-1'}>
            <section
                className={`relative w-full`}
                style={{ paddingTop: `${sizeTopBar + 70}px` }}
            >
                <div className={'relative float-right pr-[43px]'}>
                    <h2 className={'drunkTitle4 mb-[52px] uppercase'}>
                        Toutes les playlists
                    </h2>
                    <div className={'h-[500px] overflow-y-scroll pr-12'}>
                        <ul
                            className={
                                'flex w-full flex-col gap-[30px] uppercase'
                            }
                        >
                            {playlists.map((playlist, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={clsx(
                                            'drunkTitle2 text-white',
                                            {
                                                'opacity-100':
                                                    selectedPlaylist === index,
                                                'opacity-30':
                                                    selectedPlaylist !== index,
                                            }
                                        )}
                                        onMouseOver={() =>
                                            setSelectedPlaylist(index)
                                        }
                                    >
                                        {playlist.title}
                                    </li>
                                )
                            })}
                        </ul>
                        <div className={'h-60 w-full'} />
                    </div>
                    <div
                        className={
                            'pointer-events-none absolute bottom-0 left-0 right-0 top-0 bg-gradient-back '
                        }
                    />
                </div>
            </section>
            <section
                className={'relative w-full'}
                style={{
                    paddingTop: `${sizeTopBar + 70}px`,
                }}
            >
                <div className={'relative float-left ml-8 w-[500px]'}>
                    <div
                        className={
                            'relative z-50 h-[280px] w-full rounded-3xl bg-ehh_champion bg-left'
                        }
                    >
                        <Image
                            src={image}
                            alt={'test'}
                            fill={true}
                            style={{ objectFit: 'cover' }}
                            className={
                                'shadow-playlist-shadow absolute z-50 rounded-3xl'
                            }
                        />
                    </div>
                    <div
                        className={
                            'absolute -top-[26px] z-10 h-60 w-full scale-x-[0.876] rounded-3xl bg-[#1F2629] '
                        }
                    ></div>
                    <div
                        className={
                            'absolute -top-[11px] z-20 h-60 w-full scale-x-[0.924] rounded-3xl bg-[#4D4D4D]'
                        }
                    ></div>
                    <div className={'flex flex-col gap-[21px]'}>
                        <h3 className={`ibmTitle3 mt-[31px]`}>
                            {playlists[selectedPlaylist].title}
                        </h3>
                        <span className={`textMdRegular opacity-50`}>
                            {playlists[selectedPlaylist].video.length} vidéos
                        </span>
                        <p className={'textSmRegular line-clamp-4 opacity-80'}>
                            {playlists[selectedPlaylist].description}
                        </p>
                        <Button
                            bgColor={'blur'}
                            direction={buttonDirection.RIGHT}
                            size={buttonSize.BASE}
                            className={'w-40'}
                        >
                            <Link
                                href={`/playlist/${playlists[selectedPlaylist].id}`}
                            >
                                Voir la playlist
                            </Link>
                        </Button>
                    </div>
                </div>
                <div
                    className={
                        'pointer-events-none absolute bottom-0 left-0 right-0 top-0 opacity-25 blur-3xl'
                    }
                    ref={refSectionToBackground}
                ></div>
            </section>
        </div>
    )
}

export default PlayListSelector
