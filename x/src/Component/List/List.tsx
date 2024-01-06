import { useContext } from 'react'
import * as Accordion from '@radix-ui/react-accordion'

import { Header } from './Header'
import { Section } from '../Section'

import { DataContext } from '../../Context/DataContext'

type Props = {
	id: number,
	onClick: any
}

export const List: React.FC<Props> = (props) => {
	const { id, onClick } = props

	const all = useContext<any>(DataContext)
	const node = useContext<any>(DataContext).at(id)

	const defaultValue = [id.toString()]

	const onLabelCallback = (identifier: number): string => {
		const ancestor = all[identifier].super
		if (typeof all[ancestor].moniker === 'undefined') throw new Error()

		if (all[ancestor].children.length === 1)
			return all[ancestor].moniker.at(0)

		return all[ancestor].moniker.at(1)
	}

	const onSecondaryLabelCallback = (identifier: number): string | undefined => {
		return all[identifier]?.proportion?.toString()?.concat('%')
	}

	const onLengthCallback = (identifier: number): string => {
		const ancestor = all[identifier].super

		if (typeof all[identifier].proportion !== 'undefined')
			return (all[ancestor].total * all[identifier].proportion / 100).toFixed(2)

		if (typeof all[ancestor].total !== 'undefined')
			return (all[ancestor].total / all[ancestor].children.length).toFixed(2)

		return all[identifier].children.length.toString()
	}

	return (
		<Accordion.Root className='space-y-4' defaultValue={defaultValue} type={'multiple'}>
			<Header title={node.title} hsl={node.hsl} />
			{
				node.children.map(
					(identifier: number) => (
						<Section key={identifier}
							identifier={identifier}
							onLengthCallback={onLengthCallback}
							onLabelCallback={onLabelCallback}
							onSecondaryLabelCallback={onSecondaryLabelCallback}
							onClick={onClick}
						/>
					)
				)
			}
			<button onClick={() => onClick(node.super)} disabled={id === 0}>Вернуться</button>
		</Accordion.Root>
	)
}
