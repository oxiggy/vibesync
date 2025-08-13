import { useTranslation } from 'react-i18next'
import { LanguagesIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export default function LangSelect() {
	const { i18n } = useTranslation('common')

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<LanguagesIcon className="h-[1.2rem] w-[1.2rem]" />
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => i18n.changeLanguage('ru')}>RU</DropdownMenuItem>
				<DropdownMenuItem onClick={() => i18n.changeLanguage('en')}>EN</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
