import enCommon from '../../public/locales/en/common.json'
import enDashboard from '../../public/locales/en/dashboard.json'
import enForm from '../../public/locales/en/form.json'
import enGame from '../../public/locales/en/game.json'
//
import ruCommon from '../../public/locales/ru/common.json'
import ruDashboard from '../../public/locales/ru/dashboard.json'
import ruForm from '../../public/locales/ru/form.json'
import ruGame from '../../public/locales/ru/game.json'

export const resources = {
	en: {
		common: enCommon,
		dashboard: enDashboard,
		form: enForm,
		game: enGame,
	},
	ru: {
		common: ruCommon,
		dashboard: ruDashboard,
		form: ruForm,
		game: ruGame,
	},
} as const

export type DefaultNamespace = 'common'
export type AppNamespaces = keyof (typeof resources)['en']

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: DefaultNamespace
		resources: (typeof resources)['en']
	}
}
