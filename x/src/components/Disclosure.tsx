import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Disclosure({ isVisible }: { isVisible: boolean }) {
	if (!isVisible) return null
	else return (
		<ChevronDownIcon className='w-6 h-6 transition-transform group-data-[state=closed]:-rotate-90' />
	)
}
