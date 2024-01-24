import { PrinterIcon } from 'lucide-react'

import { Button } from '../Legacy'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../Legacy'

export const PrintDrawer: React.FC = () => (
	<Drawer>
		<DrawerTrigger asChild>
			<Button className='fixed right-4 bottom-4 size-16 rounded-full shadow-2xl print:hidden'
				children={<PrinterIcon />}
			/>
		</DrawerTrigger>
		<DrawerContent>
			<div className='w-full max-w-sm mx-auto'>
				<DrawerHeader className=''>
					<DrawerTitle children='Move Goal' />
					<DrawerDescription children='Set your daily activity goal.' />
				</DrawerHeader>
			</div>
			<div className='p-4 pb-0' />
			<DrawerFooter className=''>
				<Button onClick={() => window.print()}>Print</Button>
				<DrawerClose children={
					<Button variant='outline'>Cancel</Button>
				}
					asChild
				/>
			</DrawerFooter>
		</DrawerContent>
	</Drawer>
)
