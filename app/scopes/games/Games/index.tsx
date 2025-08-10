import { useAccount } from 'jazz-tools/react'
import { AppAccount, Game } from '@/schema'
import { Group } from 'jazz-tools'

export const Games = () => {
	const { me } = useAccount(AppAccount, {
		resolve: { root: { games: { $each: {} } } },
	})

	return (
		<div className="px-6 py-4">
			<h1 className="text-2xl">Games</h1>

			<ul className="py-4">
				{me?.root.games.map((game, i) => (
					<li key={game.id} className="flex justify-between py-2">
						{game.title}

						<button
							type="button"
							onClick={() => {
								me?.root.games.splice(i, 1)
							}}
						>
							DELETE
						</button>
					</li>
				))}
			</ul>

			<button
				type="button"
				onClick={() => {
					const owner = Group.create()
					const game = Game.create({ title: 'New Game' }, { owner })
					me?.root.games.push(game)
				}}
			>
				CREATE
			</button>
		</div>
	)
}
