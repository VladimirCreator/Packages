import { cn } from '../../helpers'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Section: React.FC<BadgeProps> = ({ className, ...props }) => (
	<section className={cn('flex flex-col gap-y-3 min-h-0', className)} {...props} />
)
