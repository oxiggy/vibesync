import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function LanguageHtmlSync() {
	const { i18n } = useTranslation()
	useEffect(() => {
		const el = document.documentElement
		const set = (lng: string) => el.setAttribute('lang', lng)
		set(i18n.resolvedLanguage || i18n.language)
		i18n.on('languageChanged', set)
		return () => i18n.off('languageChanged', set)
	}, [i18n])
	return null
}
