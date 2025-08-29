import { useId, useState } from 'react'
import type { GameSchema } from '@/jazz/schema'
import { useMutation } from '@tanstack/react-query'
import { createGameRequest } from '@/jazz/requests/game/create'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import type { co } from 'jazz-tools'

type CreateGameDialogProps = {
	onCreated: (game: co.loaded<typeof GameSchema>) => void
}

export const CreateGameDialog = (props: CreateGameDialogProps) => {
	const { onCreated } = props
	const titleInputId = useId()
	const [title, setTitle] = useState('New game')

	const createGameMutation = useMutation({
		mutationFn: async () => {
			const input = {
				title: title.trim() || 'New game',
			}

			const { game } = await createGameRequest.send(input)
			return game
		},

		onSuccess: async (game) => {
			onCreated(game)
		},
	})

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button type="button" size="lg">
					CREATE GAME
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create a new game</DialogTitle>

					<DialogDescription>Create a new game to get started.</DialogDescription>
				</DialogHeader>

				<div className="grid gap-4">
					<div className="grid gap-3">
						<Label htmlFor={titleInputId}>Name</Label>

						<Input id={titleInputId} name="title" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
					</div>
				</div>

				<DialogFooter>
					<DialogClose asChild>
						<Button type="button" variant="outline">
							Close
						</Button>
					</DialogClose>

					<Button
						type="button"
						disabled={createGameMutation.isPending}
						onClick={() => {
							createGameMutation.mutate()
						}}
					>
						Create game
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
