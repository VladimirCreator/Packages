/* Initially Modified at 01:26 AM on Sat 6 Jan 2024.
        Last Modified at 01:33 AM on Sat 6 Jan 2024.
*/
import { PrinterIcon } from 'lucide-react' // 01:27 AM on Sat 6 Jan 2024

import { Button } from './UI/Button' // 01:27 AM on Sat 6 Jan 2024
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './UI/Drawer' // 01:28 AM on Sat 6 Jan 2024

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
