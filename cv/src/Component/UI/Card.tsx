import { forwardRef } from 'react'

import { cn } from '../../helpers'

export const Card = forwardRef<
	HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(
	({ className, ...props }, ref) => (
		<article ref={ref} className={cn('rounded-lg bg-card text-card-foreground', className)}
			{...props}
		/>
	)
)
Card.displayName = 'Card'

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

export const CardFooter = forwardRef<
	HTMLDivElement, React.HTMLAttributes<HTMLDivElement>
>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('flex items-center', className)} {...props} />
	)
)
CardFooter.displayName = 'CardFooter'
