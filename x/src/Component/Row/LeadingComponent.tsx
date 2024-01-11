type Data = {
	title: string,
	subtitle?: string
}

type Props = Data

export const LeadingComponent: React.FC<Props> = props => {
	const {
		title,
		subtitle: text
	} = props

	const subtitle = !text ? undefined : (
		<span className='text-sm text-neutral-400
			group-active:text-white
			group-active:dark:text-black
		'
			children={text}
		/>
	)
	return (
		<h1 className='flex flex-col
			line-clamp-1
			group-active:text-white
			group-active:dark:text-black
			text-ellipsis
			w-2/3
		'
		>
			<span children={title} />
			{subtitle}
		</h1>
	)
}
