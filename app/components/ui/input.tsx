import type * as React from 'react'

import { cn } from '@/utils/tailwind'

type InputProps = React.ComponentProps<'input'> & { lang?: 'ru' | 'en' | undefined}

function InputWithLang({ className, lang, ...props }: InputProps) {
	return (
		<div className='relative w-full'>
			<div className='absolute left-2 top-1/2 -translate-y-1/2 select-none rounded-sm bg-muted px-1.5 py-0.5 text-xs font-medium tabular-nums'>
				{lang}
			</div>
			<Input
				className={cn(
					lang ? 'pl-10' : '',
					className,
				)}
				{...props}
			/>
		</div>
	)
}

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
				'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
				'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
				className,
			)}
			{...props}
		/>
	)
}

export { Input, InputWithLang }
