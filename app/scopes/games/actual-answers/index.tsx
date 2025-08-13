import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useTranslation } from 'react-i18next'

const steps = [{ name: '#1' }, { name: '#2' }, { name: '#3' }]

const users = [
	{ id: '1', nickname: 'User 1' },
	{ id: '2', nickname: 'User 2' },
	{ id: '3', nickname: 'User 3' },
	{ id: '4', nickname: 'User 4' },
	{ id: '5', nickname: 'User 5' },
]

export default function ActualAnswers() {
	const { t } = useTranslation('game')

	return (
		<div className="space-y-4">
			{steps.map((step) => (
				<div key={step.name} className="space-y-2">
					<p>{step.name}</p>
					<Select>
						<SelectTrigger className="w-full">
							<SelectValue placeholder={t('selectPlaceholder')} />
						</SelectTrigger>
						<SelectContent>
							{users.map((user) => (
								<SelectItem key={user.id} value={`user-${user.id}`}>
									{user.nickname}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			))}
		</div>
	)
}
