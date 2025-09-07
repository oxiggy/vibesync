import { useCoState } from 'jazz-tools/react'
import { GameSchema } from '@/jazz/schema/game'

export const useGame = (id: string) => {
	return useCoState(GameSchema, id, {
		resolve: {
			owner: { profile: true },
			players: { $each: { profile: true } },
			rounds: { $each: true },
		},
	})
}
