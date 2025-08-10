import { useMemo } from 'react'

interface StepperProps {
	totalSteps: number
	activeStep: number
}

export default function Stepper({ totalSteps, activeStep }: StepperProps) {
	const stepIds = useMemo(() => Array.from({ length: totalSteps }, (_, i) => `step-${i}`), [totalSteps])

	return (
		<div className="flex items-center justify-center gap-2">
			{stepIds.map((id, i) => {
				const isCompleted = i < activeStep
				const isActive = i === activeStep
				const bgColor = isActive ? 'bg-primary' : isCompleted ? 'bg-primary/20' : 'bg-primary/40'

				return <div key={id} className={`size-3 rounded-full ${bgColor} transition-colors`} title={`Step ${i + 1}`} />
			})}
		</div>
	)
}
