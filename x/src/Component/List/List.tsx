import * as Accordion from '@radix-ui/react-accordion'

import { Header } from './Header'
import { Section } from '../Section'
import { useXQuery } from '../../Service'

type Data = {
	id: number
}

type Delegate = {
	onSelectRow: (...args: any[]) => void
}

type Props = Data & Delegate

export const List: React.FC<Props> = props => {
	const { id, onSelectRow } = props

	const { data: all = JSON.parse(import.meta.env.VITE_ENVIRONMENT_DATA!) } = useXQuery()
	const node = all.at(id)

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
		<Accordion.Root className='space-y-4' defaultValue={defaultValue} type='multiple'>
			<Header title={node.title} hsl={node.hsl} />
			{
				node.children.map(
					(identifier: number) => (
						<Section key={identifier}
							identifier={identifier}
							onLengthCallback={onLengthCallback}
							onLabelCallback={onLabelCallback}
							onSecondaryLabelCallback={onSecondaryLabelCallback}
							onClick={() => {}}
						/>
					)
				)
			}
			<button disabled={id === 0}
				onClick={() => onSelectRow(node.super)}
			>
				Вернуться
			</button>
		</Accordion.Root>
	)
}
