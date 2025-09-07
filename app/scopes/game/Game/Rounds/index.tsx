import type { useUser } from '@/hooks/useUser'
import type { useGame } from '@/scopes/game/Game/hooks/useGame'
import { CreateRoundDialog } from '@/scopes/game/Game/Rounds/CreateRoundDialog'
import { DeleteRoundDialog } from '@/scopes/game/Game/Rounds/DeleteRoundDialog'

type RoundsProps = {
	user: NonNullable<ReturnType<typeof useUser>>
	game: NonNullable<ReturnType<typeof useGame>>
}

export const Rounds = (props: RoundsProps) => {
	const { user, game } = props
	console.log(JSON.stringify(game.rounds))
	return (
		<div>
			<h2 className="text-xl font-bold">Rounds</h2>

			<ul>
				{game.rounds.map((round, i) => {
					return (
						<li key={round.$jazz.id}>
							{round.title}

							{game.owner.$jazz.id === user.$jazz.id && (
								<DeleteRoundDialog
									round={round}
									onDelete={() => {
										game.rounds.$jazz.splice(i, 1)
									}}
								/>
							)}
						</li>
					)
				})}
			</ul>

			{game.owner.$jazz.id === user.$jazz.id && (
				<CreateRoundDialog
					game={game}
					onCreate={(input) => {
						console.log(input)
						game.rounds.$jazz.push(input)
					}}
				/>
			)}
		</div>
	)
}
