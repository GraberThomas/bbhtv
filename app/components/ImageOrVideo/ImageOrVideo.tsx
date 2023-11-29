import { useImagePath } from '@/app/libs/utils/hooks'
import Image from 'next/image'
import { fetchOrGetImage } from '@/app/libs/api/image'
import { Suspense } from 'react'

type ImageOrVideoProps = {
    posterID: string
    youtube_id: string
    alt: string
}

export const ImageOrVideo = async ({
    posterID,
    youtube_id,
    alt,
}: ImageOrVideoProps) => {
    const imagePath = await fetchOrGetImage(posterID)
    // await new Promise((resolve) => setTimeout(resolve, 5000))

    return (
        <Image
            src={imagePath}
            alt={alt}
            width={0}
            height={0}
            sizes={'100vh'}
            style={{
                width: 'auto',
                height: '100%',
                borderRadius: '8px',
            }}
        />
    )
}
