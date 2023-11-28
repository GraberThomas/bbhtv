import { getAllPlaylist } from '@/app/libs/api/dataFetch'
import PlayListSelector from '@/app/playlist/PlayListSelector'
import { sizeTopBar } from '@/app/ui/size'

const Page = async () => {
    const playlist = await getAllPlaylist()

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
