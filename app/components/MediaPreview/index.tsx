import { getYouTubeEmbedUrl, isImage, isYouTube } from '@/utils/helpers'
import { cn } from '@/utils/tailwind'

type MediaPreviewProps = {
	url: string
	className?: string
}

export default function MediaPreview({ url, className }: MediaPreviewProps) {
	if (isImage(url)) {
		return <img src={url} alt="preview" className={cn('max-w-full block h-auto object-contain aspect-video rounded', className)} />
	}

	if (isYouTube(url)) {
		const embedUrl = getYouTubeEmbedUrl(url) || ''
		return <iframe title="preview" src={embedUrl} className={cn('w-full aspect-video rounded', className)} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
	}

	return null
}
