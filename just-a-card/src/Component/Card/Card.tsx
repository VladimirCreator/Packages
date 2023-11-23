import './Card.scss'

import { Header } from './Header'
import { Selection } from './Selection'
import { Toolbar } from './Toolbar'
import { Footer } from './Footer'
import type { Props } from './Props'

export const Card: React.FC<Props> = (props) => {
	const { price, title, description, colors, imgHref } = props

	return (
		<article className='card'>
			<Header price={price} title={title} description={description} imgHref={imgHref} />
			<Selection colors={colors} />
			<Toolbar />
			<Footer href='#' />
		</article>
	)
}
