import AllContext from '@/contexts/AllContext'

import { useContext } from 'react'

function LeadingComponent({ title, subtitle }: { title: string, subtitle?: string }) {
	return (
		<h1 className='group-active:text-white group-active:dark:text-black
			flex flex-col
			w-2/3

			text-ellipsis
			line-clamp-1'
		>
			<span>{title}</span>
			{
				typeof subtitle !== 'undefined' &&
				<span className='group-active:text-white group-active:dark:text-black text-sm text-neutral-400'>
					{subtitle}
				</span>
			}
		</h1>
	)
}

function TrailingComponent({ text }: { text: string }) {
	return (
		<p className='group-active:text-white group-active:dark:text-black
				text-neutral-400
				ml-2
			'
		>{text}</p>
	)
}

export default function Row({ identifier, onLabelCallback, onSecondaryLabelCallback, onLengthCallback, onClick }: { identifier: number, onLabelCallback: (identifier: number) => string, onSecondaryLabelCallback: (identifier: number) => string | undefined, onLengthCallback: (identifier: number) => string, onClick: any }) {
	const node: any = useContext<any>(AllContext).at(identifier)

	return (
		<section className='group flex justify-between p-4
				bg-white dark:bg-black

				active:bg-yellow-400
				first-of-type:rounded-t-lg last-of-type:rounded-b-lg
			'
			onClick={() => onClick(node.super)}
		>
			<LeadingComponent title={node.title} subtitle={onSecondaryLabelCallback(identifier)} />
			<TrailingComponent text={onLengthCallback(identifier).concat(' ', onLabelCallback(identifier))} />
		</section>
	)
}
