import type { Route } from './+types/create'
import { Group } from 'jazz-tools'
import { jazz } from '@/server/jazz'
import { AppAccount } from '@/jazz/schema'
import { createGameRequest } from '@/jazz/requests/game/create'
import { GameSchema } from '@/jazz/schema/game'

export const action = async ({ request }: Route.ActionArgs) => {
	return await createGameRequest.handle(request, jazz.worker, async (req, acc) => {
		const { title } = req

		const account = await AppAccount.load(acc.$jazz.id, {
			resolve: {
				profile: true,
			},
		})

		if (!account) {
			throw new Error('Owner account not found')
		}

		const group = Group.create(jazz.worker)
		group.addMember(account, 'writer')
		group.makePublic('reader')

		const game = GameSchema.create(
			{
				owner: account,
				title,
				players: {
					[account.$jazz.id]: {
						profile: account.profile,
						status: 'accepted',
					},
				},
			},
			group,
		)

		return {
			game,
		}
	})
}
