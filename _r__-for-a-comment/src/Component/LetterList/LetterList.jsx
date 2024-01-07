import { useState } from 'react'

import { Letter } from '../'
import { useLazyLettersQuery } from "../../Service/"

const using = {
	date_ascending: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
	date_descending: (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
}

const Button = props => {
	const { text, onClick, ...rest } = props
	return (
		<button className='block w-full py-2 text-slate-50 bg-sky-500' onClick={onClick} {...rest}>
			{text}
		</button>
	)
}

export const LetterList = props => {
	const { letters, order } = props

	const [discloseIndex, setDiscloseIndex] = useState(undefined)
	const [query] = useLazyLettersQuery()

	const handleClick = () => {
		query({ actionName: 'MessagesLoad', oldMessages: true })
	}

	const button = (
		<Button text='Загрузить предыдущие сообщения' onClick={handleClick} />
	)
	const letterList = Array.from(letters).sort(using[order]).map(
		letter => {
			const { id } = letter
			const handleClick = () => {
				setDiscloseIndex(discloseIndex === id ? undefined : id)
			}
			return (
				<Letter key={id}
					letter={letter}
					disclose={id === discloseIndex}
					onClick={handleClick}
				/>
			)
		}
	)
	/* Meh...
	*/
	return (
		<div className='container lg:max-w-4xl min-h-screen md:py-4 mx-auto divide-y-2 snap-y transition-all'>
			{ order === 'date_ascending' && button }
			{ letterList }
			{ order === 'date_descending' && button }
		</div>
	)
}
