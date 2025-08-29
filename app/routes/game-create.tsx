import type { Route } from './+types/home'
import CreateGame from '@/scopes/games/create-game'
import { Page } from '@/components/ui/page'

export function meta(_: Route.MetaArgs) {
	return [{ title: 'New Game' }, { name: 'description', content: 'description' }]
}

export default function GamePage() {
	return (
		<Page>
			<CreateGame />
		</Page>
	)
}
