import { co, z } from 'jazz-tools'
import { PlayerSchema } from '@/jazz/schema/game/player'

export const GameSchema = co.map({
	title: z.string(),
	owner: co.account(),
	players: co.record(z.string(), PlayerSchema),
})
