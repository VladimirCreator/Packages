import * as Menubar from '@radix-ui/react-menubar'

export const Toolbar: React.FC = () => {
	return (
		<Menubar.Root className='flex absolute right-0 bottom-0 left-0 backdrop-blur'>
			<Menubar.Menu>
			</Menubar.Menu>
		</Menubar.Root>
	)
}
