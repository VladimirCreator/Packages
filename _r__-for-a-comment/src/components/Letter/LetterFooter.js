import { useState } from 'react'

function LetterFooterItem({ text, isActive, onClick, props }) {
	const className = "before:content-['#'] cursor-pointer ".concat(isActive ? 'text-blue-500' : '')

	return (<li className={className} onClick={onClick} {...props}>{text}</li>)
}

export default function LetterFooter() {
	const [activeIndex, setActiveIndex] = useState(0)

	const letterFooterItems = ['Новое', 'Эксперт'].map(
		(text, index) => {
			const handleClick = () => setActiveIndex(index)

			return (
				<LetterFooterItem key={index} text={text} isActive={activeIndex === index}
					onClick={handleClick}
				/>
			)
		}
	)

	return (
		<footer>
			<ul className='flex space-x-2 -ml-11 text-xs leading-none text-gray-300 capitalize'>{letterFooterItems}</ul>
		</footer>
	)
}
