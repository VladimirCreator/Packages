import { useState } from 'react'

const LetterFooterItem = (props) => {
	const { text, isActive, onClick, rest } = props
	const className = `before:content-['#'] cursor-pointer ${isActive ? 'text-blue-500' : ''}`

	return (
		<li className={className} onClick={onClick} {...rest}>
			{text}
		</li>
	)
}

export const Footer = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<footer>
			<ul className='flex space-x-2 -ml-11 text-xs leading-none text-gray-300 capitalize'>
				{
					['Новое', 'Эксперт'].map(
						(text, index) =>  (
							<LetterFooterItem key={index} text={text} isActive={activeIndex === index} onClick={() => setActiveIndex(index)} />
						)
					)
				}
			</ul>
		</footer>
	)
}
