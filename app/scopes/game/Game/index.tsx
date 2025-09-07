import { memo } from 'react'
import { useGame } from '@/scopes/game/Game/hooks/useGame'
import { useUser } from '@/hooks/useUser'
import { Players } from '@/scopes/game/Game/Players'
import { Page } from '@/components/ui/page'
import { Rounds } from '@/scopes/game/Game/Rounds'

type GameProps = {
	id: string
}

export const Game = memo((props: GameProps) => {
	const { id } = props
	const user = useUser()
	const game = useGame(id)

	return (
		<Page>
			{user && (
				<>
					{game === undefined && <div>...</div>}

					{game === null && <div>404</div>}

					{game && (
						<>
							<h1 className="mb-6 text-3xl font-bold">{game.title}</h1>
							<Players user={user} game={game} />
							<Rounds user={user} game={game} />
						</>
					)}
				</>
			)}
		</Page>
	)
})
