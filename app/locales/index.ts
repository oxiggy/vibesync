import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { resources } from './resources'

i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		supportedLngs: ['en', 'ru'],
		ns: Object.keys(resources.en),
		defaultNS: 'common',
		fallbackNS: 'common',
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
		detection: {
			order: ['querystring', 'localStorage', 'navigator'],
			caches: ['localStorage'],
		},
		interpolation: { escapeValue: false },
	})

export default i18n
