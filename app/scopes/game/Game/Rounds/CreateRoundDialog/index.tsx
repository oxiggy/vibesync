import { useId, useState } from 'react'
import type { co } from 'jazz-tools'
import { useMutation } from '@tanstack/react-query'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import type { GameSchema } from '@/jazz/schema/game'

type CreateRoundDialogProps = {
	game: co.loaded<typeof GameSchema>
	onCreate: (input: { title: string }) => void
}

export const CreateRoundDialog = (props: CreateRoundDialogProps) => {
	const { onCreate } = props
	const [isOpen, setIsOpen] = useState(false)
	const titleInputId = useId()
	const [title, setTitle] = useState('New round')

	const createRoundMutation = useMutation({
		mutationFn: async () => {
			return {
				title: title.trim() || 'New round',
			}
		},

		onSuccess: async (round) => {
			onCreate(round)
		},
	})

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button type="button" size="lg">
					CREATE ROUND
				</Button>
			</DialogTrigger>

			<DialogContent>
				<DialogHeader>
					<DialogTitle>Create a new round</DialogTitle>
				</DialogHeader>

				<div className="grid gap-4">
					<div className="grid gap-3">
						<Label htmlFor={titleInputId}>Title</Label>

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
						disabled={createRoundMutation.isPending}
						onClick={async () => {
							await createRoundMutation.mutateAsync()
							setIsOpen(false)
						}}
					>
						Create round
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
