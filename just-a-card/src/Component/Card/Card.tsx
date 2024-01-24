import './Card.scss'

import { Header } from './Header'
import { Selection } from './Selection'
import { Toolbar } from './Toolbar'
import { Footer } from './Footer'
import type { Props } from './Props'

export const Card: React.FC<Props> = props => {
	const { colors, ...product } = props
	return (
		<article className='card'>
			<Header {...product} />
			<Selection colors={colors} />
			<Toolbar />
			<Footer imgHref='#' />
		</article>
	)
}
