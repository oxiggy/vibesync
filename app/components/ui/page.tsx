import type * as React from 'react'
import { cn } from '@/utils/tailwind'

function Page({ className, ...props }: React.ComponentProps<'div'>) {
	return <div data-slot="page-container" className={cn('p-4 overflow-auto', className)} {...props} />
}

export { Page }
