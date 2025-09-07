import { co, z } from 'jazz-tools'

export const RoundSchema = co.map({
	title: z.string(),
})
