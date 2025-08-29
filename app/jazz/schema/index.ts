import { co } from 'jazz-tools'
import { GameSchema } from '@/jazz/schema/game'

export const ProfileSchema = co.profile()

export const AppRoot = co.map({
	games: co.list(GameSchema),
})

export const AppAccount = co.account({
	profile: ProfileSchema,
	root: AppRoot,
})
