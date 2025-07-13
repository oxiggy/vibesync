import type { Route } from './+types/home'

export function meta(_: Route.MetaArgs) {
	return [{ title: 'Form' }, { name: 'description', content: 'description' }]
}

export default function FormPage() {
	return <div>form</div>
}
