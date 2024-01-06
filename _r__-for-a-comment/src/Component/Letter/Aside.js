import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const format = date => date.toString().padStart(2, '0')

export const Aside = ({ date }) => {
	const published = new Date(date)
	const [hours, minutes] = [published.getHours(), published.getMinutes()].map(format)
	const time = `${hours}:${minutes}`

	return (
		<>
			<FontAwesomeIcon className='text-4xl mb-2 text-cyan-500 bg-sky-100 rounded-full' icon={faUserCircle} />
			<p className='text-sm leading-none text-gray-500'>
				<time dateTime={published.toISOString()}>{time}</time>
			</p>
		</>
	)
}
