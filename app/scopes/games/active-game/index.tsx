import { useState } from 'react'
import Stepper from '@/components/Stepper'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useTranslation } from 'react-i18next'

import ActualAnswers from '@/scopes/games/actual-answers'

const question = {
	name: 'Lorem',
}

const users = [
	{ id: '1', nickname: 'User 1' },
	{ id: '2', nickname: 'User 2' },
	{ id: '3', nickname: 'User 3' },
	{ id: '4', nickname: 'User 4' },
	{ id: '5', nickname: 'User 5' },
]

export default function ActiveGame() {
	const { t } = useTranslation(['game', 'common'])
	const [selectedUser, setSelectedUser] = useState<string | null>(null)

	return (
		<div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
			<div>
				<div className="flex gap-4 items-center justify-between">
					<p className="text-xl font-semibold">{question.name}</p>
					<Stepper totalSteps={8} activeStep={4} />
				</div>

				<div>preview</div>

				<div className="p-2 flex gap-8 border rounded-xl">
					<div className="grow flex gap-2 flex-wrap items-center">
						{users.map((user) => (
							<Badge key={user.id} className="cursor-pointer" variant={selectedUser === user.id ? 'default' : 'secondary'} onClick={() => setSelectedUser(user.id)}>
								{user.nickname}
							</Badge>
						))}
					</div>
					<Button className="">{t('common:button.skip')}</Button>
				</div>
			</div>

			<div>
				<p className="mb-1 text-lg font-semibold">{t('answers')}</p>
				<p className="mb-4 text-xs text-muted-foreground">{t('common:error.duplicateUsers')}</p>

				<ActualAnswers />
			</div>
		</div>
	)
}
