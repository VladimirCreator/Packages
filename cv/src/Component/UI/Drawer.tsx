/* Initially Modified at 12:45 AM on Sat 6 Jan 2024.
        Last Modified at 01:01 AM on Sat 6 Jan 2024.
*/
import { HTMLAttributes, forwardRef } from 'react' // 4:36 AM Sat 6 Jan 2024
import { Drawer as DrawerPrimitive } from 'vaul' /* 12:47 AM Sat 6 Jan 2024 */

import { cn } from '../../helpers' // 4:37 AM Sat 6 Jan 2024

// Last Modified: 12:50 AM Sat 6 Jan 2024
export const Drawer = ({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
	<DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
)
Drawer.displayName = 'Drawer'

export const DrawerTrigger = DrawerPrimitive.Trigger // Last Modified: 12:50 AM Sat 6 Jan 2024
export const DrawerPortal = DrawerPrimitive.Portal // Last Modified: 12:50 AM Sat 6 Jan 2024
export const DrawerClose = DrawerPrimitive.Close // Last Modified: 12:50 AM Sat 6 Jan 2024

// Last Modified: 12:52 AM Sat 6 Jan 2024
export const DrawerOverlay = forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(
	({ className, ...props }, ref) => (
		<DrawerPrimitive.Overlay ref={ref} className={cn('fixed inset-0 bg-black/80 z-50', className)}
			{...props}
		/>
	)
)
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

// Last Modified: 12:56 AM Sat 6 Jan 2024
export const DrawerContent = forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(
	({ className, children, ...props }, ref) => (
		<DrawerPortal>
			<DrawerOverlay />
			<DrawerPrimitive.Content ref={ref} className={cn('fixed inset-x-0 bottom-0 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background z-50', className)}
				{...props}
			>
				<div className='w-[100px] h-2 mx-auto mt-4 bg-muted rounded-full' />
				{children}
			</DrawerPrimitive.Content>
		</DrawerPortal>
	)
)
DrawerContent.displayName = 'DrawerContent'

// Last Modified: 12:57 AM Sat 6 Jan 2024
export const DrawerHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)} {...props} />
)
DrawerHeader.displayName = 'DrawerHeader'

// Last Modified: 12:58 AM Sat 6 Jan 2024
export const DrawerFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('flex flex-col gap-2 p-4 mt-auto', className)} {...props} />
)
DrawerFooter.displayName = 'DrawerFooter'

// Last Modified: 1:00 AM Sat 6 Jan 2024
export const DrawerTitle = forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(
	({ className, ...props }, ref) => (
		<DrawerPrimitive.Title ref={ref} className={cn('font-semibold text-lg leading-none tracking-tight', className)}
			{...props}
		/>
	)
)
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

// Last Modified: 1:01 AM Sat 6 Jan 2024
export const DrawerDescription = forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(
	({ className, ...props }, ref) => (
		<DrawerPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)}
			{...props}
		/>
	)
)
DrawerDescription.displayName = DrawerPrimitive.Description.displayName
