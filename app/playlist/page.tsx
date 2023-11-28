import { getAllPlaylist } from '@/app/libs/api/dataFetch'
import PlayListSelector from '@/app/playlist/PlayListSelector'
import { sizeTopBar } from '@/app/ui/size'

const Page = async () => {
    const playlist = await getAllPlaylist()

    return (
        <main
            className={'mb-14 min-h-[calc(100vh-86px)] w-full'}
            style={{
                minHeight: `calc(100vh-${sizeTopBar})`,
            }}
        >
            <PlayListSelector playlists={playlist} />
        </main>
    )
}

export default Page
