type Props = {
	text: string
}

export const TrailingComponent: React.FC<Props> = ({ text }) => (
	<p className='text-neutral-400
		ml-2
		group-active:text-white group-active:dark:text-black
	'
		children={text}
	/>
)
