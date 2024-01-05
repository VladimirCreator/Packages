/* Initially Modified at 01:02 AM on Sat 6 Jan 2024.
        Last Modified at 01:04 AM on Sat 6 Jan 2024.
*/
import { cn } from '../../helpers' // 4:18 AM Sat 6 Jan 2024

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Section: React.FC<BadgeProps> = ({ className, ...props }) => (
	<section className={cn('flex flex-col gap-y-3 min-h-0', className)} {...props} />
)
