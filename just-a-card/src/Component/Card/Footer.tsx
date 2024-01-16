import { Props as FooterProps } from './Props'

type Props = Pick<FooterProps, 'imgHref'>

export const Footer: React.FC<Props> = props => {
	const { imgHref } = props
	return (
		<footer className='card__footer'>
			<p>
				<a href={imgHref}>Read reviews</a>
			</p>
		</footer>
	)
}
