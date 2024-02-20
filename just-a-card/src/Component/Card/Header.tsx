import type { Props as HeaderProps } from './Props'

type Props = Omit<HeaderProps, 'variants'> & {
	src: string
}

export const Header: React.FC<Props> = props => {
	const {
		price,
		title, description,
		src
	} = props
	return (
		<header className='card__header'>
			<h1 className='header__heading'>{title}</h1>
			<figure>
				<img src={src} width={256} height={256} alt={title} />
				<figcaption className='header__price'>${price}</figcaption>
			</figure>
			<p className='header__description'>{description}</p>
		</header>
	)
}
