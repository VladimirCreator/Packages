type Props = {
	title: string
	hsl?: string
}

export const Header: React.FC<Props> = props => {
	const { title, hsl = '' } = props
	return (
		<header>
			<h1 className={`text-4xl font-bold ${hsl}`} children={title} />
		</header>
	)
}
