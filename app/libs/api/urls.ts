const url = process.env.API_URL
if (url === undefined) throw new Error('API_URL is not defined')

const playlistUrl = url + '/items/playlist'
const assetsUrl: string = url + '/assets'

const videoUrl = url + '/items/video'

const url_api_live = process.env.API_LIVE_URL
if (url_api_live === undefined) throw new Error('API_URL is not defined')

export { url, url_api_live, playlistUrl, assetsUrl, videoUrl }
