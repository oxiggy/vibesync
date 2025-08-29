import { experimental_defineRequest, z } from 'jazz-tools'
import { GameSchema } from '@/jazz/schema/game'

const workerId = import.meta.env.PUBLIC_JAZZ_WORKER_ACCOUNT

export const createGameRequest = experimental_defineRequest({
	url: '/api/game/create',
	workerId,

	request: {
		schema: {
			title: z.string(),
		},

		resolve: {},
	},

	response: {
		schema: {
			game: GameSchema,
		},

		resolve: {
			game: true,
		},
	},
})
