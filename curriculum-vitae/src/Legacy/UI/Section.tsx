import { cn } from '../helpers'

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Section: React.FC<SectionProps> = ({ className, ...props }) => (
	<section className={cn('flex flex-col gap-y-3 min-h-0', className)} {...props} />
)
