/* Initially Modified at 11:47 PM on Fri 5 Jan 2024.
        Last Modified at 12:17 AM on Sat 6 Jan 2024.
*/
import { forwardRef } from 'react' // 4:25 AM Sat 6 Jan 2024
import { Command as CommandPrimitive } from 'cmdk' // 4:24 AM Sat 6 Jan 2024
import { Search } from 'lucide-react' // 4:28 AM Sat 6 Jan 2024
import type { DialogProps } from '@radix-ui/react-dialog' /* 11:48 PM Fri 5 Jan 2024 */

import { Dialog, DialogContent } from '../UI/Dialog' // 4:26 AM Sat 6 Jan 2024
import { cn } from '../../helpers' // 4:25 AM Sat 6 Jan 2024

// Last Modified: 11:51 PM Fri 5 Jan 2024
export const Command = forwardRef<
	React.ElementRef<typeof CommandPrimitive>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(
	({ className, ...props }, ref) => (
		<CommandPrimitive ref={ref} className={cn('flex size-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground', className)}
			{...props}
		/>
	)
)
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

// Last Modified: 11:57 PM Fri 5 Jan 2024
export const CommandDialog: React.FC<CommandDialogProps> = ({ children, ...props }) => (
	<Dialog {...props}>
		<DialogContent className='overflow-hidden p-0 shadow-lg'>
			<Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:not([hidden])_~[cmdk-group]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:w-5 [&_[cmdk-item]_svg]:h-5' children={children} />
		</DialogContent>
	</Dialog>
)

// Last Modified: 12:03 AM Sat 6 Jan 2024
export const CommandInput = forwardRef<
	React.ElementRef<typeof CommandPrimitive.Input>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(
	({ className, ...props }, ref) => (
		<div className='flex items-center border-b px-3' cmdk-input-wrapper=''>
			<Search className='size-4 mr-2 shrink-0 opacity-50' />
			<CommandPrimitive.Input ref={ref} className={cn('flex w-full h-11 rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50', className)}
				{...props}
			/>
		</div>
	)
)
CommandInput.displayName = CommandPrimitive.Input.displayName

// Last Modified: 12:06 AM Sat 6 Jan 2024
export const CommandList = forwardRef<
	React.ElementRef<typeof CommandPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(
	({ className, ...props }, ref) => (
		<CommandPrimitive.List ref={ref} className={cn('max-h-[300px] overflow-x-hidden overflow-y-auto', className)}
			{...props}
		/>
	)
)
CommandList.displayName = CommandPrimitive.List.displayName

// Last Modified: 12:08 AM Sat 6 Jan 2024
export const CommandEmpty = forwardRef<
	React.ElementRef<typeof CommandPrimitive.Empty>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(
	(props, ref) => (
		<CommandPrimitive.Empty ref={ref} className='py-6 text-sm text-center' {...props} />
	)
)
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

// Last Modified: 12:11 AM Sat 6 Jan 2024
export const CommandGroup = forwardRef<
	React.ElementRef<typeof CommandPrimitive.Group>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(
	({ className, ...props }, ref) => (
		<CommandPrimitive.Group ref={ref} className={cn('overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground', className)}
			{...props}
		/>
	)
)
CommandGroup.displayName = CommandPrimitive.Group.displayName

// Last Modified: 12:11 AM Sat 6 Jan 2024
export const CommandSeparator = forwardRef<
	React.ElementRef<typeof CommandPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(
	({ className, ...props }, ref) => (
		<CommandPrimitive.Separator ref={ref} className={cn('-mx-1 h-px bg-border', className)} {...props} />
	)
)
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

// Last Modified: 12:14 AM Sat 6 Jan 2024
export const CommandItem = forwardRef<
	React.ElementRef<typeof CommandPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(
	({ className, ...props }, ref) => (
		<CommandPrimitive.Item ref={ref} className={cn('relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className)}
			{...props}
		/>
	)
)
CommandItem.displayName = CommandPrimitive.Item.displayName

// Last Modified: 12:17 AM Sat 6 Jan 2024
export const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
	<span className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)} {...props} />
)
CommandShortcut.displayName = 'CommandShortcut'
