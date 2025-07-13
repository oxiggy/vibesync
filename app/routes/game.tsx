import type { Route } from './+types/home'

export function meta(_: Route.MetaArgs) {
	return [{ title: 'Game' }, { name: 'description', content: 'description' }]
}

export default function GamePage() {
	return <div>game</div>
}
