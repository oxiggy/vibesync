import type { Route } from './+types/home'
import { Page } from '@/components/ui/page'
import Form from '@/scopes/forms/form'

export function meta(_: Route.MetaArgs) {
	return [{ title: 'Form' }, { name: 'description', content: 'description' }]
}

export default function FormPage() {
	return (
		<Page>
			<Form />
		</Page>
	)
}
