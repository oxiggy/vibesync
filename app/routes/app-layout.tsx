import { useMemo } from 'react'
import { Outlet } from 'react-router'
import AppBar from '@/scopes/app/app-bar'
import ThemeProvider from '@/scopes/app/theme-provider'
import { useIsAuthenticated } from 'jazz-tools/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function AppLayout() {
	const isAuthenticated = useIsAuthenticated()
	const queryClient = useMemo(() => new QueryClient(), [])

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<QueryClientProvider client={queryClient}>
				<div className="min-h-dvh h-full grid grid-rows-[auto_1fr] overflow-hidden">
					<AppBar />

					{isAuthenticated && <Outlet />}
				</div>
			</QueryClientProvider>
		</ThemeProvider>
	)
}
