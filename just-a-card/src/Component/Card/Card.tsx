import './Card.scss'
import { useState } from 'react'

import { Header } from './Header'
import { Selection } from './Selection'
import { Toolbar } from './Toolbar'
import { Footer } from './Footer'

import type { Props } from './Props'

export const Card: React.FC<Props> = props => {
	const { variants, ...product } = props
	const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0)

	const src = variants[selectedColorIndex].src
	const colors = variants.map(variant => variant.color)

	const handleColorSelection = (index: number) => {
		setSelectedColorIndex(index)
	}

	return (
		<article className='card'>
			<Header {...product} src={src} />
			<Selection selectedColorIndex={selectedColorIndex} colors={colors}
				onSelectColor={handleColorSelection}
			/>
			<Toolbar />
			<Footer imgHref='#' />
		</article>
	)
}
