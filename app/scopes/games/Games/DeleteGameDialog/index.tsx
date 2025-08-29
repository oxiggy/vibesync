import type { GameSchema } from '@/schema'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import type { co } from 'jazz-tools'

type DeleteGameDialogProps = {
	game: co.loaded<typeof GameSchema>
	onDelete: VoidFunction
}

export const DeleteGameDialog = (props: DeleteGameDialogProps) => {
	const { game, onDelete } = props

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button type="button" variant="destructive" size="sm">
					DELETE
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete game?</DialogTitle>

					<DialogDescription>
						Are you sure you want to delete <strong>{game.title}</strong> game?
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<DialogClose asChild>
						<Button type="button" variant="outline" autoFocus>
							Cancel
						</Button>
					</DialogClose>

					<Button type="button" variant="destructive" onClick={onDelete}>
						Delete game
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
