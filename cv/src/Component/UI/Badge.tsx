/* Initially Modified at 08:14 PM on Fri 5 Jan 2024.
        Last Modified at 08:23 PM on Fri 5 Jan 2024.
*/
import { cva } from 'class-variance-authority' // 4:15 AM Sat 6 Jan 2024
import type { VariantProps } from 'class-variance-authority' // 4:16 AM Sat 6 Jan 2024

import { cn } from '../../helpers' // 4:17 AM Sat 6 Jan 2024

export const variants = cva(
	'inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap',
	{
		defaultVariants: {
			variant: 'default'
		},
		variants: {
			variant: {
				default: 'border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60',
				secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60',
				destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
				outline: 'text-foreground'
			}
		}
	}
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>,
	VariantProps<typeof variants>
{}

export const Badge: React.FC<BadgeProps> = ({ className, variant, ...props }) => (
	<div className={cn(variants({ variant }), className)} {...props} />
)
