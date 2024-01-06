import { PrinterIcon } from 'lucide-react'

import { Button } from './UI/Button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './UI/Drawer'

export const PrintDrawer: React.FC = () => (
	<Drawer>
		<DrawerTrigger asChild>
			<Button className='fixed right-4 bottom-4 size-16 rounded-full shadow-2xl print:hidden'>
				<PrinterIcon />
			</Button>
		</DrawerTrigger>
		<DrawerContent>
			<div className='w-full max-w-sm mx-auto'>
				<DrawerHeader className=''>
					<DrawerTitle>Move Goal</DrawerTitle>
					<DrawerDescription>Set your daily activity goal.</DrawerDescription>
				</DrawerHeader>
			</div>
			<div className='p-4 pb-0' />
			<DrawerFooter className=''>
				<Button onClick={() => window.print()}>Print</Button>
				<DrawerClose asChild>
					<Button variant='outline'>Cancel</Button>
				</DrawerClose>
			</DrawerFooter>
		</DrawerContent>
	</Drawer>
)
