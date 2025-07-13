import type { Route } from './+types/home'

export function meta(_: Route.MetaArgs) {
	return [{ title: 'App' }, { name: 'description', content: 'description' }]
}

export default function DashboardPage() {
	return <div className="h-[2000px]">Dashboard</div>
}
