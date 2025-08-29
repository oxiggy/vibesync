import type { Route } from './+types/create'
import { Group } from 'jazz-tools'
import { jazz } from '@/server/jazz'
import { GameSchema, AppAccount } from '@/schema'
import { createGameRequest } from '@/jazz/requests/game/create'

export const action = async ({ request }: Route.ActionArgs) => {
	return await createGameRequest.handle(request, jazz.worker, async (req, account) => {
		const { title } = req

		const ownerAccount = await AppAccount.load(account.$jazz.id, {
			resolve: {
				profile: true,
			},
		})

		if (!ownerAccount) {
			throw new Error('Owner account not found')
		}

		const group = Group.create(jazz.worker)
		group.addMember(account, 'writer')
		group.makePublic('reader')

		const game = GameSchema.create(
			{
				owner: account,
				title,
			},
			group,
		)

		return {
			game,
		}
	})
}
