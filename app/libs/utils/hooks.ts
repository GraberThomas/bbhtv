import { useEffect, useState } from 'react'
import { fetchOrGetImage } from '@/app/libs/api/image'

export const useImagePath = (poster_id: string) => {
    const [imagePath, setImagePath] = useState<string | null>(null)

    useEffect(() => {
        fetchOrGetImage(poster_id).then((path) => {
            setImagePath(path)
        })
    }, [poster_id])

    return [imagePath]
}
