import { co, z } from 'jazz-tools'

export const PlayerSchema = co.map({
	profile: co.profile(),
	status: z.enum(['pending', 'accepted']),
})
