import { Props as HeaderProps } from './Props'

type Props = Omit<HeaderProps, 'colors'>

export const Header: React.FC<Props> = props => {
	const { price, title, description, imgHref } = props
	return (
		<header className='card__header'>
			<h1 className='header__heading'>{title}</h1>
			<figure>
				<img width={256} height={256} src={imgHref} alt='alternative' />
				<figcaption className='header__price'>${price}</figcaption>
			</figure>
			<p className='header__description'>{description}</p>
		</header>
	)
}
