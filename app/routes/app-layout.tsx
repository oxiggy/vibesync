import { Outlet } from 'react-router'
import AppBar from '@/scopes/app/app-bar'
import ThemeProvider from '@/scopes/app/theme-provider'

export default function AppLayout() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="min-h-dvh h-full grid grid-rows-[auto_1fr] overflow-hidden">
				<AppBar />
				<Outlet />
			</div>
		</ThemeProvider>
	)
}
