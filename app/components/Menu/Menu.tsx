'use client'
import Link from 'next/link'
import Image from 'next/image'
import Button, { buttonDirection, buttonSize } from '@/app/ui/buttons/Button'
import { sizeTopBar } from '@/app/ui/size'
import { useLayoutEffect, useRef } from 'react'

const Menu = () => {
    const refNav = useRef<HTMLElement>(null)

    useLayoutEffect(() => {
        const handleScroll = () => {
            if (!refNav.current) return
            if (window.scrollY > 0) {
                refNav.current.style.backgroundColor = 'black'
            } else {
                refNav.current.style.backgroundColor = 'transparent'
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav
            className={`fixed z-[999] flex w-full items-center bg-none transition-all duration-300`}
            style={{ height: `${sizeTopBar}px` }}
            ref={refNav}
        >
            <div className={'ml-[42px] mr-auto h-[32px]'}>
                <ul className={'flex h-full gap-4 text-center'}>
                    <li className={'flex h-full items-center justify-center'}>
                        <Button
                            bgColor={'link'}
                            size={buttonSize.SM}
                            direction={buttonDirection.NONE}
                        >
                            <Link href={'/'}>Acceuil</Link>
                        </Button>
                    </li>
                    <li className={'flex h-full items-center justify-center'}>
                        <Button
                            bgColor={'link'}
                            size={buttonSize.SM}
                            direction={buttonDirection.NONE}
                        >
                            <Link href={'/playlist'}>Playlist</Link>
                        </Button>
                    </li>
                    <li className={'flex h-full items-center justify-center'}>
                        <Button
                            bgColor={'link'}
                            size={buttonSize.SM}
                            direction={buttonDirection.NONE}
                        >
                            <Link href={'/direct'}>Direct</Link>
                        </Button>
                    </li>
                </ul>
            </div>
            <Image
                src={'/logo_bbh.svg'}
                alt={'Logo of BBG'}
                width={47}
                height={62}
                className={'absolute left-1/2 -translate-x-1/2'}
            />
            <Button
                bgColor={'blur'}
                direction={buttonDirection.RIGHT}
                size={buttonSize.BASE}
                className={'mr-[42px]'}
            >
                <a href={'https://www.brest-bretagnehandball.fr/'}>bbh.zsh</a>
            </Button>
        </nav>
    )
}

export default Menu
