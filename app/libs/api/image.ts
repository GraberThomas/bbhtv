'use server'

import { Video } from '@/app/libs/api/types/videos'
import * as fs from 'fs'

const assetsUrl = 'https://api.brest.life/assets'

const toSavePath = './public/downloadedFile'

export const fetchOrGetImage = async (image_id: string): Promise<string> => {
    const pathFile = `${toSavePath}/${image_id}.jpg`
    return new Promise<string>((resolve, reject) => {
        if (fs.existsSync(pathFile)) {
            resolve(pathFile.substring(8))
            return
        }
        return fetch(`${assetsUrl}/${image_id}`)
            .then((res) => res.arrayBuffer())
            .then((buff) => {
                return fs.writeFile(pathFile, Buffer.from(buff), (err) => {
                    if (err) {
                        reject(err)
                        return
                    }
                    resolve(pathFile.substring(8))
                })
            })
    })
}

export async function fetchOrGetLastCoverImage(
    videos: Video[]
): Promise<string> {
    return fetchOrGetImage(videos[videos.length - 1].cover)
}
