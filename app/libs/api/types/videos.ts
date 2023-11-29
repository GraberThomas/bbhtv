export type Video = {
    id: string
    status: string
    sort: string | null
    youtube_id: string
    title: string
    description: string
    cover: string
    duration: number
    view_count: number
    like_count: number
    date_published: string
    playlist: number[]
}
