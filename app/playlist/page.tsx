import { fetchAllPlaylist } from '@/app/libs/api/playlist'
import PlayListSelector from '@/app/playlist/PlayListSelector'

const Page = async () => {
    const playlist = await fetchAllPlaylist()

    return (
        <main
            className={'mb-14 w-full'}
            style={{
                minHeight: `calc(100vh)`,
            }}
        >
            <PlayListSelector playlists={playlist} />
        </main>
    )
}

export default Page
