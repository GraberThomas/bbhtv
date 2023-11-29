import { buttonDirection, buttonSize } from '@/app/ui/buttons/Button'
import { EyeIcon, HandThumbUpIcon } from '@heroicons/react/20/solid'
import { getDiffenceDate } from '@/app/libs/utils/playlistInfo'
import React, { Suspense } from 'react'
import { ImageOrVideo } from '@/app/components/ImageOrVideo/ImageOrVideo'
import ImageLoading from '@/app/components/skeleton/imageLoading'
import GoToButton from '@/app/components/button/goToButton'

type CardVideoLineXlProps = {
    title: string
    date: string
    viewCount: string
    like_count: string
    description: string
    url: string
    cover: string
    id: string
}

export const CardVideoLineXl = ({
    title,
    date,
    viewCount,
    like_count,
    description,
    cover,
    url,
    id,
}: CardVideoLineXlProps) => {
    const postDay = getDiffenceDate(date)
    return (
        <div className={'relative flex h-[270px] w-full'}>
            <div
                className={
                    'relative bottom-0 left-0 right-0 top-0 h-full min-w-[30%]'
                }
            >
                <Suspense
                    fallback={<ImageLoading height={'270px'} width={'100%'} />}
                >
                    <ImageOrVideo
                        posterID={cover}
                        alt={'Cover of vidéo'}
                        youtube_id={url}
                    />
                </Suspense>
            </div>
            <div
                className={
                    'mx-[35px] flex h-[270px] w-[60%] flex-col justify-evenly'
                }
            >
                <h3 className={'ibmTitle3 uppercase'}>{title}</h3>
                <div
                    className={
                        'textSmRegular flex w-1/2 items-center gap-4 opacity-50'
                    }
                >
                    <p>
                        {postDay !== 0
                            ? `Il y a ${postDay} jours`
                            : "Aujourd'hui"}
                    </p>
                    <p className={'flex items-center justify-center gap-2'}>
                        <EyeIcon height={12} width={12} />
                        {viewCount}
                    </p>
                    <p className={'flex items-center justify-center gap-2'}>
                        <HandThumbUpIcon height={12} width={12} />
                        {like_count} j&apos;aime
                    </p>
                </div>
                <p
                    className={
                        'textSmRegular overflow-hidden text-ellipsis opacity-80'
                    }
                >
                    {description}
                </p>
                <GoToButton
                    bgColor={'blur'}
                    direction={buttonDirection.RIGHT}
                    size={buttonSize.BASE}
                    className={'w-fit'}
                    href={`/video/${id}`}
                >
                    Voir la vidéo
                </GoToButton>
            </div>
        </div>
    )
}
