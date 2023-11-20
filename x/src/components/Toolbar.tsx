'use client'

import * as Menubar from '@radix-ui/react-menubar'

export default function Toolbar({ children }: { children?: React.ReactNode }) {
	return (
		<Menubar.Root className='flex absolute right-0 bottom-0 left-0 backdrop-blur'>
			<Menubar.Menu>
				<h1>ASFsa</h1><h1>ASFsa</h1>
			</Menubar.Menu>
		</Menubar.Root>
	)
}
