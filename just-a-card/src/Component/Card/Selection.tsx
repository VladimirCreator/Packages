import { useState } from 'react'

import { Props as SelectionProps } from './Props'

type Props = Pick<SelectionProps, 'colors'>

export const Selection: React.FC<Props> = (props) => {
	const { colors } = props
	const [selectedIndex, setSelectedIndex] = useState<number|undefined>(undefined)

	const handleClick = (index: number) => {
		setSelectedIndex(index)
	}

	return (
		<section className='card__selection'>
			<p>Choose your colour</p>
			<ul>
				{
					colors.map(
						(color, index) => (
							<li className={index === selectedIndex ? 'selection__selected' : ''} onClick={() => handleClick(index)}>
								<svg viewBox='0 0 40 40' fill={color}>
									<circle cx='20' cy='20' r='18' />
								</svg>
							</li>
						)
					)
				}
			</ul>
		</section>
	)
}
