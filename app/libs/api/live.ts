'use server'

import { IsLiveReturnAPI } from '@/app/libs/api/types/live'
import { playlistUrl } from '@/app/libs/api/urls'

export const fetchIsLive = async () => {
    return fetch(playlistUrl, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
        .then((res: Response) => res.json())
        .then((data) => {
            return data as IsLiveReturnAPI
        })
}
