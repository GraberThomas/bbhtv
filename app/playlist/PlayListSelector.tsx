'use client'

import { Playlist } from '@/app/libs/api/types/playlist'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import {
    druk_bold,
    ibm_plex_sans_bold,
    ibm_plex_sans_regular,
} from '@/app/ui/fonts/fonts'
import Image from 'next/image'
import Button, { buttonDirection, buttonSize } from '@/app/ui/buttons/Button'
import Link from 'next/link'
import { sizeTopBar } from '@/app/ui/size'

type PlayListSelectorProps = {
    playlists: Playlist[]
}

const PlayListSelector = ({ playlists }: PlayListSelectorProps) => {
    const [selectedPlaylist, setSelectedPlaylist] = useState<number>(0)

    const [image, setImage] = useState<string>('')

    useEffect(() => {
        const getImage = async () => {
            const response = await fetch(
                `https://api.brest.life/assets/${playlists[selectedPlaylist].cover}`
            )
            const blob = await response.blob()
            console.log(URL.createObjectURL(blob))
            setImage(URL.createObjectURL(blob))
        }
        getImage()
    }, [playlists, selectedPlaylist])

    return (
        <div className={'flex gap-1'}>
            <section
                className={`relative w-full ${druk_bold.className} text-lg`}
                style={{ paddingTop: `${sizeTopBar + 70}px` }}
            >
                <div className={'relative float-right pr-[43px]'}>
                    <h2 className={'mb-[52px] text-lg uppercase'}>
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
                                        className={clsx('text-3xl text-white', {
                                            'opacity-100':
                                                selectedPlaylist === index,
                                            'opacity-30':
                                                selectedPlaylist !== index,
                                        })}
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
                            'bg-gradient-back pointer-events-none absolute bottom-0 left-0 right-0 top-0 '
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
                <div className={'relative float-left w-[500px]'}>
                    <Image
                        src={image}
                        alt={'test'}
                        height={280}
                        width={500}
                        className={
                            'shadow-playlist-shadow rotate relative z-50 rounded-3xl'
                        }
                    />
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
                        <h3
                            className={`${ibm_plex_sans_bold} mt-[31px] text-2xl`}
                        >
                            {playlists[selectedPlaylist].title}
                        </h3>
                        <span
                            className={`${ibm_plex_sans_regular} text-base opacity-50`}
                        >
                            {playlists[selectedPlaylist].video.length} vidéos
                        </span>
                        <p className={'line-clamp-4'}>
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
                <div className={'absolute bottom-0 left-0 right-0 top-0'}></div>
            </section>
        </div>
    )
}

export default PlayListSelector
