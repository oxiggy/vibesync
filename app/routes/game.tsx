import type { Route } from './+types/game'
import { Game } from '@/scopes/game/Game'

export function meta(_: Route.MetaArgs) {
	return [{ title: 'Game' }, { name: 'description', content: 'description' }]
}

export default function GamePage({ params }: Route.ComponentProps) {
	return <Game id={params.gameId} />
}
