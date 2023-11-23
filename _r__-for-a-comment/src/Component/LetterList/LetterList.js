import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchLetters } from '../../redux/slices/applicationSlice'

import { Letter } from '../Letter'

const using = {
	date_ascending: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
	date_descending: (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
}

const Button = (props) => {
	const { text, onClick, rest } = props
	return (
		<button className='block w-full py-2 text-slate-50 bg-sky-500' onClick={onClick} {...rest}>
			{text}
		</button>
	)
}

export const LetterList = ({ letters, order }) => {
	const [discloseIndex, setDiscloseIndex] = useState(undefined)
	const dispatch = useDispatch()

	const letterList = Array.from(letters).sort(using[order]).map(
		(letter) => {
			return (
				<Letter key={letter.id}
					letter={letter}
					disclose={letter.id === discloseIndex}
					onClick={
						() => {
							if (discloseIndex === letter.id)
								setDiscloseIndex(undefined)
							else
								setDiscloseIndex(letter.id)
						}
					}
				/>
			)
		}
	)

	const handleClick = () => {
    const payload = { actionName: "MessagesLoad", oldMessages: true }
    dispatch(fetchLetters(payload))
  }

	return (
		<div className="container lg:max-w-4xl min-h-screen md:py-4 mx-auto divide-y-2 snap-y transition-all">
			{ order === "date_ascending" && <Button text="Загрузить предыдущие сообщения" onClick={handleClick} /> }
			{ letterList }
			{ order === "date_descending" && <Button text="Загрузить предыдущие сообщения" onClick={handleClick} /> }
		</div>
	)
}
