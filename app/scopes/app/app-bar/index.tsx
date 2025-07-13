import logoSrc from '@/assets/images/logo.svg'
import AccountMenu from 'app/scopes/users/account-menu'
import ThemeSelect from 'app/scopes/app/theme-select'
import LangSelect from '@/scopes/app/lang-select'
import { useIsAuthenticated } from 'jazz-tools/react'
import { SignInButton, SignOutButton } from '@clerk/clerk-react'

export default function AppBar() {
	const isAuthenticated = useIsAuthenticated()

	return (
		<div className="w-full p-4 flex gap-4 items-center border-b">
			<img src={logoSrc} alt="logo" className="shrink-0 block h-4 w-auto" />
			<div className="grow" />
			<ThemeSelect />
			<LangSelect />

			{isAuthenticated && <AccountMenu />}

			{isAuthenticated ? <SignOutButton>Logout</SignOutButton> : <SignInButton />}
		</div>
	)
}
