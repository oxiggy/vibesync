import type { Route } from './+types/home'
import { Welcome } from '../welcome/welcome'

export function meta(_: Route.MetaArgs) {
	return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function Home() {
	return <Welcome />
}
