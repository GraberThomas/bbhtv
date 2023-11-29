import { Video } from '@/app/libs/api/types/videos'

export function getTotalView(videos: Video[]): number {
    return videos.reduce((acc: number, curr: Video) => acc + curr.view_count, 0)
}

export const getDurationString = (total: number): string => {
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

export function getTotalViewString(videos: Video[]): string {
    const total = getTotalView(videos)
    return getDurationString(total)
}

export function transformDate(date: string): string {
    // exemple : 2023-11-16T16:34:45, parse in french
    const d = new Date(date)
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
}

export function getDiffenceDate(date: string): number {
    const d = new Date(date)
    const now = new Date()
    const diff = now.getTime() - d.getTime()
    return Math.floor(diff / (1000 * 3600 * 24))
}
