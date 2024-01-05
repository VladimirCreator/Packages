/* Initially Modified at 12:19 AM on Sat 6 Jan 2024.
        Last Modified at 12:43 AM on Sat 6 Jan 2024.
*/
import { HTMLAttributes, forwardRef } from 'react' // 4:34 AM Sat 6 Jan 2024
import * as DialogPrimitive from '@radix-ui/react-dialog' /* 12:20 AM Sat 6 Jan 2024 */
import { ElementRef } from 'react'
import { X } from 'lucide-react' // 4:35 AM Sat 6 Jan 2024

import { cn } from '../../helpers' // 4:32 AM Sat 6 Jan 2024

export const Dialog = DialogPrimitive.Root // Last Modified: 12:21 AM Sat 6 Jan 2024
export const DialogTrigger = DialogPrimitive.Trigger // Last Modified: 12:22 AM Sat 6 Jan 2024
export const DialogPortal = DialogPrimitive.Portal // Last Modified: 12:22 AM Sat 6 Jan 2024
export const DialogClose = DialogPrimitive.Close // Last Modified: 12:22 AM Sat 6 Jan 2024

// Last Modified: 12:26 AM Sat 6 Jan 2024
export const DialogOverlay = forwardRef<
	ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(
	({ className, ...props }, ref) => (
		<DialogPrimitive.Overlay ref={ref} className={cn('fixed inset-0 bg-black/20 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 print:hidden', className)}
			{...props}
		/>
	)
)
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

// Last Modified: 12:36 AM Sat 6 Jan 2024
export const DialogContent = forwardRef<
	ElementRef<typeof DialogPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(
	({ className, children, ...props }, ref) => (
		<DialogPortal>
			<DialogOverlay />
			<DialogPrimitive.Content ref={ref} className={cn('fixed left-[50%] top-[50%] grid w-full max-w-lg translate-x-[-50%] translate-y[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] print:hidden sm:rounded-lg z-50', className)}
				{...props}
			>
				{children}
				<DialogPrimitive.Close className='absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
					<X className='size-4' />
					<span className='sr-only'>Close</span>
				</DialogPrimitive.Close>
			</DialogPrimitive.Content>
		</DialogPortal>
	)
)
DialogContent.displayName = DialogPrimitive.Content.displayName

// Last Modified: 12:39 AM Sat 6 Jan 2024
export const DialogHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div	className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}
		{...props}
	/>
)
DialogHeader.displayName = 'DialogHeader'

// Last Modified: 12:39 AM Sat 6 Jan 2024
export const DialogFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div	className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
		{...props}
	/>
)
DialogFooter.displayName = 'DialogFooter'

// Last Modified: 12:42 AM Sat 6 Jan 2024
export const DialogTitle = forwardRef<
	ElementRef<typeof DialogPrimitive.Title>, React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(
	({ className, ...props }, ref) => (
		<DialogPrimitive.Title ref={ref} className={cn('text-lg font-semibold leading-none tracking-tight', className)}
			{...props}
		/>
	)
)
DialogTitle.displayName = DialogPrimitive.Title.displayName

// Last Modified: 12:43 AM Sat 6 Jan 2024
export const DialogDescription = forwardRef<
	ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(
	({ className, ...props }, ref) => (
		<DialogPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)}
			{...props}
		/>
	)
)
DialogDescription.displayName = DialogPrimitive.Description.displayName
