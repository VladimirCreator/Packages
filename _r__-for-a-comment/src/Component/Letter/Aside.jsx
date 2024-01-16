import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const format = date => date.toString().padStart(2, '0')

export const Aside = ({ date }) => {
	const published = new Date(date) // It is assumed that `date` is a valid ISO string.:1:56 PM Mon 15 Jan 2024
	const [hours, minutes] = [published.getHours(), published.getMinutes()].map(format)

	const time = `${hours}:${minutes}`
	return (
		<aside className='flex flex-col items-center mr-2.5'>
			<FontAwesomeIcon className='text-4xl mb-2 text-cyan-500 bg-sky-100 rounded-full' icon={faUserCircle} />
			<p className='text-sm leading-none text-gray-500'>
				<time dateTime={published.toISOString()}>{time}</time>
			</p>
		</aside>
	)
}
