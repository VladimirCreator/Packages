type Props = {
	title: string,
	hsl?: string
}

export const Header: React.FC<Props> = (props) => {
	const { title, hsl = '' } = props
	const className = `text-4xl font-bold ${hsl}`

	return (
		<header>
			<h1 className={className}>{title}</h1>
		</header>
	)
}
