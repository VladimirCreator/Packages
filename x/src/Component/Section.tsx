import { useContext } from 'react'

import * as Accordion from '@radix-ui/react-accordion'

import { Row } from './Row/Row'
import { Disclosure } from './Disclosure'

import { DataContext } from '../Context/DataContext'

type Props = {
	identifier: number,
	onLabelCallback: (identifier: number) => string,
	onSecondaryLabelCallback: (identifier: number) => string | undefined,
	onLengthCallback: (identifier: number) => string,
	onClick: any
}

export const Section: React.FC<Props> = (props) => {
	const { identifier, onLengthCallback, onLabelCallback, onSecondaryLabelCallback, onClick } = props
	const node: any = useContext<any>(DataContext).at(identifier)
	const hasChildren = node.children.length !== 0

	return (
		<Accordion.Item value={identifier.toString()}>
			<Accordion.Header className={'\
				flex justify-between items-center\
				mb-2\
				text-2xl\
				font-medium break-all\
			'.concat(' ', node.hsl ?? '')
			}>
				{node.title}
				<Accordion.Trigger className={'group'}>
					{hasChildren && <Disclosure isVisible={true} />}
				</Accordion.Trigger>
			</Accordion.Header>

			<Accordion.Content className='overflow-hidden
				data-[state=closed]:animate-shrink
				data-[state=open]:animate-grow
			'
			>
				{
					node.total &&
					<h4 className='mb-2'>
						Общий показатель: {node.total} {node.total === 1 ? node.moniker[0] : node.moniker[1]}.
					</h4>
				}
				<div className='divide-y'>
					{
						node.children.map(
							($0_identifier: number) => (
								<Row key={$0_identifier}
									identifier={$0_identifier}
									onLabelCallback={onLabelCallback}
									onSecondaryLabelCallback={onSecondaryLabelCallback}
									onLengthCallback={onLengthCallback}
									onClick={onClick}
								/>
							)
						)
					}
				</div>
			</Accordion.Content>
		</Accordion.Item>
	)
}
