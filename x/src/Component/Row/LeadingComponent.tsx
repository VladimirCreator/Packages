type Props = {
	title: string,
	subtitle?: string
}

export const LeadingComponent: React.FC<Props> = (props) => {
	const { title, subtitle } = props

	return (
		<h1 className='flex flex-col text-ellipsis line-clamp-1 group-active:text-white group-active:dark:text-black
			w-2/3
		'
		>
			<span children={title} />
			<span className='text-sm text-neutral-400 group-active:text-white group-active:dark:text-black' children={subtitle} />
		</h1>
	)
}
