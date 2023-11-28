'use server'

import { Playlist } from '@/app/libs/api/types/playlist'
import { IsLiveReturnAPI } from '@/app/libs/api/types/live'

const url = process.env.API_URL
const url_api_live = process.env.API_LIVE_URL
if (url === undefined) throw new Error('API_URL is not defined')
if (url_api_live === undefined) throw new Error('API_URL is not defined')
const playlistUrl = url + '/items/playlist/'

export async function getPlaylist(page: number): Promise<Playlist[]> {
    return fetch(`${playlistUrl}?page=${page}`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => {
            return data.data as Playlist[]
        })
}

export async function getAllPlaylist(): Promise<Playlist[]> {
    let playlists: Playlist[] = []
    let page = 1
    let again = true
    do {
        let newPlaylist = await getPlaylist(page)
        if (newPlaylist.length < 100) {
            again = false
        }
        playlists = [...playlists, ...newPlaylist]
    } while (again)
    return playlists
}

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
