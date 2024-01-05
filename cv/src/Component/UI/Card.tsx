/* Initially Modified at 08:39 PM on Fri 5 Jan 2024.
        Last Modified at 08:48 PM on Fri 5 Jan 2024.
*/
import { forwardRef } from 'react' /* 8:40 PM Fri 5 Jan 2024 */

import { cn } from '../../helpers' // 4:23 AM Sat 6 Jan 2024

// Last Modified: 8:42 PM Fri 5 Jan 2024
export const Card = forwardRef<
	HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('rounded-lg bg-card text-card-foreground', className)}
			{...props}
		/>
	)
)
Card.displayName = 'Card'

// Last Modified: 8:44 PM Fri 5 Jan 2024
export const CardHeader = forwardRef<
	HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('flex flex-col space-y-1.5', className)}
			{...props}
		/>
	)
)
CardHeader.displayName = 'CardHeader'

// Last Modified: 8:46 PM Fri 5 Jan 2024
export const CardTitle = forwardRef<
	HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>
>(
	({ className, ...props }, ref) => (
		<h3 ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
			{...props}
		/>
	)
)
CardTitle.displayName = 'CardTitle'

// Last Modified: 8:47 PM Fri 5 Jan 2024
export const CardDescription = forwardRef<
	HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>
>(
	({ className, ...props }, ref) => (
		<p ref={ref} className={cn('text-sm text-muted-foreground', className)}
			{...props}
		/>
	)
)
CardDescription.displayName = 'CardDescription'

// Last Modified: 8:48 PM Fri 5 Jan 2024
export const CardContent = forwardRef<
	HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('text-pretty font-mono text-sm text-muted-foreground', className)}
			{...props}
		/>
	)
)
CardContent.displayName = 'CardContent'

// Last Modified: 8:48 PM Fri 5 Jan 2024
export const CardFooter = forwardRef<
	HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('flex items-center', className)} {...props} />
	)
)
CardFooter.displayName = 'CardFooter'
