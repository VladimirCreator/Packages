import { useContext } from 'react'

import { LeadingComponent } from './LeadingComponent'
import { TrailingComponent } from './TraillingComponent'
import { DataContext } from '../../Context/DataContext'

type Props = {
	identifier: number,
	onLabelCallback: (identifier: number) => string,
	onSecondaryLabelCallback: (identifier: number) => string | undefined,
	onLengthCallback: (identifier: number) => string,
	onClick: any
}

export const Row: React.FC<Props> = (props) => {
	const { identifier, onLabelCallback, onSecondaryLabelCallback, onLengthCallback, onClick } = props
	const node: any = useContext<any>(DataContext).at(identifier)

	const handleClick = () => {
		onClick(node.super)
	}

	return (
		<section className='flex justify-between group
			p-4
			bg-white dark:bg-black active:bg-yellow-400

			first-of-type:rounded-t-lg last-of-type:rounded-b-lg
		'
			onClick={handleClick}
		>
			<LeadingComponent title={node.title} subtitle={onSecondaryLabelCallback(identifier)} />
			<TrailingComponent text={onLengthCallback(identifier).concat(' ', onLabelCallback(identifier))} />
		</section>
	)
}
