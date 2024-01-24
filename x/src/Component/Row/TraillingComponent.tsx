type Data = {
	text: string
}

type Props = Data

export const TrailingComponent: React.FC<Props> = ({ text }) => (
	<p className='text-neutral-400
		group-active:text-white
		group-active:dark:text-black
		ml-2
	'
		children={text}
	/>
)
