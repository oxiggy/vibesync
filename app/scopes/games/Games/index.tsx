import { useAccount } from 'jazz-tools/react'
import { AppAccount } from '@/jazz/schema'
import { Page } from '@/components/ui/page'
import { NavLink, useNavigate } from 'react-router'
import { CreateGameDialog } from './CreateGameDialog'
import { DeleteGameDialog } from '@/scopes/games/Games/DeleteGameDialog'

export const Games = () => {
	const { me } = useAccount(AppAccount, {
		resolve: { root: { games: { $each: {} } } },
	})

	const navigate = useNavigate()

	if (!me) {
		return <div>Loading...</div>
	}

	return (
		<Page>
			<h1 className="text-3xl font-bold">Games</h1>

			<ul className="py-4">
				{me?.root.games.map((game, i) => (
					<li key={game.$jazz.id} className="relative flex justify-between py-2">
						{game.title}

						<NavLink className="absolute inset-0" to={game.$jazz.id} />

						<div className="relative">
							<DeleteGameDialog
								game={game}
								onDelete={() => {
									me.root.games.$jazz.splice(i, 1)
								}}
							/>
						</div>
					</li>
				))}
			</ul>

			<CreateGameDialog
				onCreated={(game) => {
					me.root.games.$jazz.push(game)
					navigate(game.$jazz.id)
				}}
			/>
		</Page>
	)
}
