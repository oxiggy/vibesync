import { useState } from 'react'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import MediaPreview from '@/components/MediaPreview'
import { isValidUrl, isYouTubePlaylist } from '@/utils/helpers'

const questions = [
	{ question: 'What is your favorite meme image?' },
	{ question: 'Show a portrait of your favorite actor.' },
	{ question: 'What is a movie trailer you want to watch?' },
	{ question: 'What is a podcast you like?' },
	{ question: 'What is a short you liked?' },
]

const errorText = {
	empty: 'This field is required',
	invalid: 'Must be a valid link',
	list: 'Playlist links are not allowed',
}

export default function Form() {
	const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''))
	const [errors, setErrors] = useState<string[]>(Array(questions.length).fill(''))

	const validate = (value: string): string => {
		if (value.trim() === '') return errorText.empty
		if (!isValidUrl(value)) return errorText.invalid
		if (isYouTubePlaylist(value)) return errorText.list
		return ''
	}

	const handleInputChange = (index: number, value: string) => {
		const updatedAnswers = [...answers]
		updatedAnswers[index] = value
		setAnswers(updatedAnswers)

		const updatedErrors = [...errors]
		updatedErrors[index] = validate(value)
		setErrors(updatedErrors)
	}

	const handleSave = () => {
		const newErrors = answers.map(validate)
		setErrors(newErrors)

		const hasErrors = newErrors.some((e) => e !== '')
		if (!hasErrors) {
			alert('Answers saved!')
		}
	}

	const filledCount = answers.filter((a) => a.trim() !== '').length
	const progress = (filledCount / questions.length) * 100

	return (
		<div className="max-w-[800px] mx-auto py-4">
			<Progress value={progress} />
			<p className="mb-2 mt-5 text-2xl">BestGamers sync v1</p>
			<div className="mb-8 space-x-6 text-sm text-primary/70">
				<span>Creator: UserName2</span>
				<span>Date: 2026/01/11</span>
				<span>Players: 12</span>
			</div>

			<div className="space-y-8">
				{questions.map((item, index) => (
					<div key={item.question} className="grid grid-cols-2 gap-8">
						<div className="space-y-2">
							<div className="font-semibold">{item.question}</div>
							<Input type="text" placeholder="Your answer" className="border p-2 w-full" value={answers[index]} onChange={(e) => handleInputChange(index, e.target.value)} />
							{errors[index] && <div className="text-xs text-red-500">{errors[index]}</div>}
						</div>

						<MediaPreview url={answers[index]} />
					</div>
				))}
			</div>

			<Button className="w-full mt-8" disabled={progress !== 100} onClick={handleSave}>
				Save
			</Button>
		</div>
	)
}
