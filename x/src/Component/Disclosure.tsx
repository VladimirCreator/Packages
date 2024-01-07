import { ChevronDownIcon } from '@heroicons/react/24/outline'

type Props = {
	isVisible: boolean
}

export const Disclosure: React.FC<Props> = props => {
	const { isVisible } = props
	const isHidden = !isVisible

	return do {
		if (isHidden)
			null
		else
			<ChevronDownIcon className='w-6 h-6 transition-transform group-data-[state=closed]:-rotate-90' />
	}
}
