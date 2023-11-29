'use server'

import { Playlist } from '@/app/libs/api/types/playlist'
import { playlistUrl } from '@/app/libs/api/urls'

async function fetchPlaylistPage(page: number): Promise<Playlist[]> {
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

export async function fetchAllPlaylist(): Promise<Playlist[]> {
    let playlists: Playlist[] = []
    let page = 1
    let again = true
    do {
        let newPlaylist = await fetchPlaylistPage(page)
        if (newPlaylist.length < 100) {
            again = false
        }
        playlists = [...playlists, ...newPlaylist]
    } while (again)
    return playlists
}

export async function FetchPlayList(id: number): Promise<Playlist> {
    return fetch(`${playlistUrl}/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => {
            return data.data as Playlist
        })
}
