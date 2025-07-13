import logoSrc from '@/assets/images/logo.svg'
import AccountMenu from 'app/scopes/users/account-menu'
import ThemeSelect from 'app/scopes/app/theme-select'
import LangSelect from '@/scopes/app/lang-select'

export default function AppBar() {
	return (
		<div className="w-full p-4 flex gap-4 items-center border-b">
			<img src={logoSrc} alt="logo" className="shrink-0 block h-4 w-auto" />
			<div className="grow" />
			<ThemeSelect />
			<LangSelect />
			<AccountMenu />
		</div>
	)
}
