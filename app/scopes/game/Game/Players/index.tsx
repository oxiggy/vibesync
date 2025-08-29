import type { useUser } from '@/hooks/useUser'
import type { useGame } from '@/scopes/game/Game/hooks/useGame'
import { useMutation } from '@tanstack/react-query'
import { joinGameRequest } from '@/jazz/requests/game/join'
import { leaveGameRequest } from '@/jazz/requests/game/leave'
import { Button } from '@/components/ui/button'

type PlayersProps = {
	user: NonNullable<ReturnType<typeof useUser>>
	game: NonNullable<ReturnType<typeof useGame>>
}

export const Players = (props: PlayersProps) => {
	const { user, game } = props

	const joinMutation = useMutation({
		mutationFn: async () => {
			if (game.owner.$jazz.id === user.$jazz.id) {
				game.players.$jazz.set(user.$jazz.id, {
					profile: user.profile,
					status: 'accepted',
				})
			} else {
				await joinGameRequest.send({ game })
			}
		},
	})

	const leaveMutation = useMutation({
		mutationFn: async () => {
			if (game.owner.$jazz.id === user.$jazz.id) {
				game.players.$jazz.delete(user.$jazz.id)
			} else {
				await leaveGameRequest.send({ game })
			}
		},
	})

	const kick = (id: string) => {
		game.players.$jazz.delete(id)
	}

	const accept = (player: (typeof game)['players'][string]) => {
		player.$jazz.set('status', 'accepted')
	}

	return (
		<div>
			<h2 className="text-xl font-bold">
				Players
				{!game.players[user.$jazz.id] && (
					<Button variant="outline" disabled={joinMutation.isPending} onClick={() => joinMutation.mutate()}>
						Join
					</Button>
				)}
			</h2>

			<ul>
				{Object.entries(game.players).map(([id, player]) => {
					if (!player) return null

					return (
						<li key={id}>
							{player.profile.name} ({player.status})
							{id === user.$jazz.id && (
								<Button variant="outline" disabled={leaveMutation.isPending} onClick={() => leaveMutation.mutate()}>
									Leave
								</Button>
							)}
							{id !== user.$jazz.id && game.owner.$jazz.id === user.$jazz.id && (
								<Button variant="outline" onClick={() => kick(id)}>
									Kick
								</Button>
							)}
							{game.owner.$jazz.id === user.$jazz.id && player.status === 'pending' && (
								<Button variant="outline" onClick={() => accept(player)}>
									Accept
								</Button>
							)}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
