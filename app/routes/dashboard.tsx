import type { Route } from './+types/home'
import { Games } from '@/scopes/games/Games'

export function meta(_: Route.MetaArgs) {
	return [{ title: 'App' }, { name: 'description', content: 'description' }]
}

export default function DashboardPage() {
	return (
		<div className="h-[2000px]">
			<Games />
		</div>
	)
}
