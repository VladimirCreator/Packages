import { ChevronDownIcon } from '@heroicons/react/24/outline'

type Data = {
	isVisible?: boolean
}

type Props = Data

export const Disclosure: React.FC<Props> = props => {
	const { isVisible = true } = props
	const isHidden = !isVisible

	return isHidden ? null : (
		<ChevronDownIcon className='size-6
			transition-transform
			group-data-[state=closed]:-rotate-90
		'
		/>
	)
}
