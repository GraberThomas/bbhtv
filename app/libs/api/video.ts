'use server'

import { playlistUrl, videoUrl } from '@/app/libs/api/urls'
import { Video } from '@/app/libs/api/types/videos'

export async function fetchVideosOfPlaylist(
    playlist_id: number
): Promise<Video[]> {
    return fetch(`${playlistUrl}/${playlist_id}?fields[]=video.video_id.*`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        cache: 'no-store',
    })
        .then((res) => {
            if (!res.ok) throw new Error(res.statusText)
            return res.json()
        })
        .then((data: { data: { video: { video_id: Video }[] } }) => {
            return data.data.video
                .map((elem) => {
                    return elem.video_id
                })
                .sort((a: Video, b: Video) => {
                    if (a.date_published < b.date_published) return 1
                    if (a.date_published < b.date_published) return -1
                    return 0
                })
        })
}

export async function fetchVideo(video_id: string): Promise<Video> {
    return fetch(`${videoUrl}/${video_id}`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        cache: 'no-store',
    })
        .then((res) => {
            if (!res.ok) throw new Error(res.statusText)
            return res.json()
        })
        .then((data) => {
            return data.data as Video
        })
}
