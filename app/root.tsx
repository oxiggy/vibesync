import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import { ClerkProvider, useClerk } from '@clerk/clerk-react'
import { JazzReactProviderWithClerk } from 'jazz-tools/react'
import './locales'

import type { Route } from './+types/root'
import './app.css'
import { LanguageHtmlSync } from '@/locales/LanguageHtmlSync'

const PUBLIC_CLERK_KEY = import.meta.env.PUBLIC_CLERK_KEY

if (!PUBLIC_CLERK_KEY) {
	throw new Error('Add your Clerk publishable key to the .env.local file')
}

const PUBLIC_JAZZ_KEY = import.meta.env.PUBLIC_JAZZ_KEY

export const links: Route.LinksFunction = () => [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
	},
]

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	return (
		<ClerkProvider publishableKey={PUBLIC_CLERK_KEY} afterSignOutUrl="/">
			<JazzProvider />
			<LanguageHtmlSync />
		</ClerkProvider>
	)
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oops!'
	let details = 'An unexpected error occurred.'
	let stack: string | undefined

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error'
		details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message
		stack = error.stack
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	)
}

function JazzProvider() {
	const clerk = useClerk()

	return (
		<JazzReactProviderWithClerk
			clerk={clerk}
			sync={{
				peer: `wss://cloud.jazz.tools/?key=${PUBLIC_JAZZ_KEY}`,
			}}
		>
			<Outlet />
		</JazzReactProviderWithClerk>
	)
}
