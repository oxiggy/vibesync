import { co, z } from 'jazz-tools'

export const Game = co.map({
	title: z.string(),
})

export const AppRoot = co.map({
	games: co.list(Game),
})

export const AppAccount = co
	.account({
		profile: co.profile(),
		root: AppRoot,
	})
	.withMigration(async (account) => {
		if (account.root === undefined) {
			account.root = AppRoot.create({
				games: co.list(Game).create([], { owner: account }),
			})
		}
	})
