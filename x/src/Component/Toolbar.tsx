import * as Menubar from '@radix-ui/react-menubar'

type Props = {

}

export const Toolbar: React.FC<Props> = () => (
	<Menubar.Root className='absolute right-0 bottom-0 left-0
		flex
		backdrop-blur
	'
	>
		<Menubar.Menu>
		</Menubar.Menu>
	</Menubar.Root>
)
