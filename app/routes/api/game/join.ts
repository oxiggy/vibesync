import type { Route } from './+types/join'
import { jazz } from '@/server/jazz'
import { AppAccount } from '@/jazz/schema'
import { joinGameRequest } from '@/jazz/requests/game/join'

export const action = async ({ request }: Route.ActionArgs) => {
	return await joinGameRequest.handle(request, jazz.worker, async (req, acc) => {
		const { game } = req

		const account = await AppAccount.load(acc.$jazz.id, {
			resolve: {
				profile: true,
			},
		})

		if (!account) {
			throw Error('Account not found')
		}

		if (!game.players) {
			throw Error('Game is broken')
		}

		game.players.$jazz.set(acc.$jazz.id, {
			profile: account.profile,
			status: 'pending',
		})

		return {
			game,
		}
	})
}
