import { LeadingComponent } from '.'
import { TrailingComponent } from '.'
import { useLazyXQuery } from '../../Service'

enum Text {
	label,
	secondaryLabel,
	length
}

type Data = {
	identifier: number
}

type Delegate = {
	onTextCallback?: (identifier: number, text: Text) => string
	onLabelCallback: (identifier: number) => string
	onSecondaryLabelCallback: (identifier: number) => string | undefined
	onLengthCallback: (identifier: number) => string
	onClick: any
}

type Props = Data & Delegate

export const Row: React.FC<Props> = props => {
	const {
		identifier,
		onLabelCallback, onSecondaryLabelCallback,
		onLengthCallback,
		onClick
	} = props
	const [_, { data: all = JSON.parse(import.meta.env.VITE_ENVIRONMENT_DATA!) }] = useLazyXQuery()
	const { super: pIdentifier, title } = all.at(identifier)

	const subtitle = onSecondaryLabelCallback(identifier)
	const text = `${onLengthCallback(identifier)} ${onLabelCallback(identifier)}`

	const handleClick = () => {
		onClick(pIdentifier)
	}

	return (
		<section className='group
			flex justify-between
			p-4
			bg-white dark:bg-black
			active:bg-yellow-400

			first-of-type:rounded-t-lg
			last-of-type:rounded-b-lg
		'
			onClick={handleClick}
		>
			<LeadingComponent title={title} subtitle={subtitle} />
			<TrailingComponent text={text} />
		</section>
	)
}
