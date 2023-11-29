import { Video } from '@/app/libs/api/types/videos'

export function getTotalView(videos: Video[]): number {
    return videos.reduce((acc: number, curr: Video) => acc + curr.view_count, 0)
}

export function getTotalViewString(videos: Video[]): string {
    const total = getTotalView(videos)
    if (total < 1000) {
        return total.toString()
    } else if (total < 1000000) {
        return (total / 1000).toFixed(1) + 'k'
    } else if (total < 1000000000) {
        return (total / 1000000).toFixed(1) + 'M'
    } else {
        return (total / 1000000000).toFixed(1) + 'Md'
    }
}
