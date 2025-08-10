export function isImage(url: string): boolean {
	return /\.(jpe?g|png|gif|bmp|webp|avif|svg)(\?.*)?$/i.test(url)
}

export function isYouTube(url: string): boolean {
	const ytRegex = /(?:https?:\/\/)?(?:www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+/
	return ytRegex.test(url)
}

export function isYouTubePlaylist(url: string): boolean {
	try {
		const parsed = new URL(url)
		const isYoutubeHost = parsed.hostname.includes('youtube.com') || parsed.hostname === 'youtu.be'
		return isYoutubeHost && parsed.searchParams.has('list')
	} catch {
		return false
	}
}

export function getYouTubeEmbedUrl(url: string): string | null {
	const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/
	const match = url.match(regex)
	if (!match) return null

	const videoId = match[1]
	const time = extractTimeFromUrl(url) // функция ниже

	return `https://www.youtube.com/embed/${videoId}${time ? `?start=${time}` : ''}`
}

function extractTimeFromUrl(url: string): number | null {
	const timeRegex = /[?&#]t=(\d+)([smh]?)?/
	const match = url.match(timeRegex)
	if (!match) return null

	const value = parseInt(match[1], 10)
	const unit = match[2]
	if (!unit) return value

	if (unit === 's') return value
	if (unit === 'm') return value * 60
	if (unit === 'h') return value * 3600
	return value
}

export function isValidUrl(str: string): boolean {
	try {
		const url = new URL(str)
		return url.protocol === 'http:' || url.protocol === 'https:'
	} catch {
		return false
	}
}
