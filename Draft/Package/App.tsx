import React, { useRef, useState, useEffect } from 'react'

import './App.css'

const target = 'Apple' as const

export const App = () => {
	const refs = useRef(null);
	const [toUpperCase, setToUpperCase] = useState(false)
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [completedIndices, setCompletedIndices] = useState<number[]>([])

	useEffect(
		() => {
			console.log(selectedIndex)
			const logOnKeyDown = (event: KeyboardEvent) => {
				console.log(event.key)
			}
			const increaseOnArrowRight = (event: KeyboardEvent) => {
				if (!event.code.toLowerCase().includes('arrowright')) {
					return
				}

				if (selectedIndex >= target.length - 1) {
					return
				}
				setSelectedIndex(selectedIndex + 1)
			}
			const decreaseOnArrowLeft = (event: KeyboardEvent) => {
				if (!event.code.toLowerCase().includes('arrowleft')) {
					return
				}

				if (selectedIndex <= 0) {
					return
				}
				setSelectedIndex(selectedIndex - 1)
			}
			const toUpperCaseOnSpace = (event: KeyboardEvent) => {
				if (!event.code.toLowerCase().includes('space')) {
					return
				}
				setToUpperCase(!toUpperCase)
			}
			const completeOnArrowDown = (event: KeyboardEvent) => {
				if (!event.code.toLowerCase().includes('arrowdown')) {
					return
				}
				if (!completedIndices.includes(selectedIndex))
					setCompletedIndices(completedIndices.concat(selectedIndex))
			}
			const completeOnArrowUp = (event: KeyboardEvent) => {
				if (!event.code.toLowerCase().includes('arrowup')) {
					return
				}
				if (completedIndices.includes(selectedIndex))
					setCompletedIndices(completedIndices.filter(index => selectedIndex !== index))
			}
			const selectOnKeyDown = (event: KeyboardEvent) => {
				if (Array.from(target).includes(event.key.toLowerCase())) {
					event.preventDefault()
					setSelectedIndex(target.indexOf(event.key.toLowerCase()))
				}
			}
			const onKeyDown = (event: KeyboardEvent) => {
				!true ? logOnKeyDown(event) : undefined
				toUpperCaseOnSpace(event)
				increaseOnArrowRight(event)
				decreaseOnArrowLeft(event)
				completeOnArrowUp(event)
				completeOnArrowDown(event)
				selectOnKeyDown(event)
			}

			window.addEventListener('keydown', onKeyDown)
			return () => {
				window.removeEventListener('keydown', onKeyDown)
			}
		},
		[toUpperCase, selectedIndex]
	)

	useEffect(
		() => {

		},
		[selectedIndex]
	)

	const heading = toUpperCase ? target.charAt(selectedIndex).toUpperCase() : target.charAt(selectedIndex)
	const subheading = Array.from(
		target,
		(letter, indexOfLetter) => (
			React.createElement(
				'span',
				{
					key: indexOfLetter,
					className: indexOfLetter === selectedIndex ?
						completedIndices.includes(indexOfLetter) ? 'selected completed' : 'selected'
					: completedIndices.includes(indexOfLetter) ? 'completed' : null
				},
				toUpperCase ? letter.toUpperCase() : letter
			)
		)
	)
	return (
		<>
			<div>
				<h1>
					{heading}
				</h1>
				<p children={subheading} />
			</div>
		</>
	)
}
