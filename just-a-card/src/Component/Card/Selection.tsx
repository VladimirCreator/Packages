import style from './Card.module.scss'
//import type { Props as SelectionProps } from './Props'

type Delegate = {
	onSelectColor: (index: number) => void
}

type Props = {
	selectedColorIndex: number
	colors: string[]
} &
	Delegate

export const Selection: React.FC<Props> = props => {
	const {
		selectedColorIndex, colors,
		onSelectColor
	} = props

	const colorsAsJsx = colors.map(
		(color, index) => {
			const handleClick = () => {
				onSelectColor(index)
			}

			return (
				<li className={index === selectedColorIndex ? style.selection__selected : ''}
					onClick={handleClick}
				>
					<svg viewBox='0 0 40 40' fill={color}>
						<circle cx='20' cy='20' r='18' />
					</svg>
				</li>
			)
		}
	)
	return (
		<section className={style.card__selection}>
			<p>Choose your color</p>
			<ul>{colorsAsJsx}</ul>
		</section>
	)
}
