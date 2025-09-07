import type { co } from 'jazz-tools'
import type { RoundSchema } from '@/jazz/schema/game/round'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

type DeleteRoundDialogProps = {
	round: co.loaded<typeof RoundSchema>
	onDelete: VoidFunction
}

export const DeleteRoundDialog = (props: DeleteRoundDialogProps) => {
	const { round, onDelete } = props

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button type="button" variant="destructive" size="sm">
					DELETE
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete round?</DialogTitle>

					<DialogDescription>
						Are you sure you want to delete <strong>{round.title}</strong> round?
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<DialogClose asChild>
						<Button type="button" variant="outline" autoFocus>
							Cancel
						</Button>
					</DialogClose>

					<Button type="button" variant="destructive" onClick={onDelete}>
						Delete round
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
