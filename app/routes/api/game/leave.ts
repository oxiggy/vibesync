import type { Route } from './+types/leave'
import { jazz } from '@/server/jazz'
import { leaveGameRequest } from '@/jazz/requests/game/leave'

export const action = async ({ request }: Route.ActionArgs) => {
	return await leaveGameRequest.handle(request, jazz.worker, async (req, acc) => {
		const { game } = req

		if (!game.players) {
			throw Error('Game is broken')
		}

		game.players.$jazz.delete(acc.$jazz.id)

		return {
			game,
		}
	})
}
