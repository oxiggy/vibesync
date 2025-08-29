import { experimental_defineRequest } from 'jazz-tools'

import { GameSchema } from '@/jazz/schema/game'

const workerId = import.meta.env.PUBLIC_JAZZ_WORKER_ACCOUNT

export const leaveGameRequest = experimental_defineRequest({
	url: '/api/game/leave',
	workerId,

	request: {
		schema: {
			game: GameSchema,
		},

		resolve: {
			game: true,
		},
	},

	response: {},
})
