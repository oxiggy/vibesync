import type { Route } from './+types/home'
import ActiveGame from '@/scopes/games/active-game'
import { Page } from '@/components/ui/page'

export function meta(_: Route.MetaArgs) {
	return [{ title: 'Game' }, { name: 'description', content: 'description' }]
}

export default function GamePage() {
	return (
		<Page>
			<ActiveGame />
		</Page>
	)
}
