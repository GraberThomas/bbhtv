'use client'

import { gsap } from 'gsap'
import { useEffect, useLayoutEffect, useRef } from 'react'

type ImageLoadingProps = {
    height: string
    width: string
}

const ImageLoading = ({ height, width }: ImageLoadingProps) => {
    const ref1 = useRef<HTMLDivElement>(null)
    const ref2 = useRef<HTMLDivElement>(null)
    const ref3 = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const box1 = ref1.current
        const box2 = ref2.current
        const box3 = ref3.current

        if (box1 && box2 && box3) {
            gsap.to(ref1.current, {
                duration: 0.5,
                y: '-20px',
                repeat: -1,
                yoyo: true,
            })
            gsap.to(ref2.current, {
                duration: 0.5,
                y: '-20px',
                repeat: -1,
                yoyo: true,
                delay: 0.2,
            })
            gsap.to(ref3.current, {
                duration: 0.5,
                y: '-20px',
                repeat: -1,
                yoyo: true,
                delay: 0.4,
            })
        }

        return () => {
            if (box1 && box2 && box3) {
                gsap.killTweensOf(box1)
                gsap.killTweensOf(box2)
                gsap.killTweensOf(box3)
            }
        }
    })

    return (
        <div
            className={'bg-gris-01 relative bg-gray-300'}
            style={{ height: `${height}`, width: `${width}` }}
        >
            <div
                className={
                    'absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-4'
                }
            >
                <div
                    ref={ref1}
                    className={' h-[20px] w-[20px] rounded-full bg-black'}
                ></div>
                <div
                    ref={ref2}
                    className={'h-[20px] w-[20px] rounded-full bg-black'}
                ></div>
                <div
                    ref={ref3}
                    className={'h-[20px] w-[20px] rounded-full bg-black'}
                ></div>
            </div>
        </div>
    )
}

export default ImageLoading
