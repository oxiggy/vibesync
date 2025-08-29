import { co, z } from 'jazz-tools'

export const ProfileSchema = co.profile()

export const GameSchema = co.map({
	title: z.string(),
	owner: co.account(),
})

export const AppRoot = co.map({
	games: co.list(GameSchema),
})

export const AppAccount = co.account({
	profile: ProfileSchema,
	root: AppRoot,
})
