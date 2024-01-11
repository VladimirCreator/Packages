/* Imported at 11:52 PM on Thu 11 Jan 2024.<continue>I do not know what it will become but I created this at ??:?? PM on Thu 11 Jan 2024.
*/

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

div {
	position: relative;
}

h1 {
	font-size: 30rem;
	line-height: 1em;
}

p {
	position: absolute;
	right: 0; bottom: -1em; left: 0;
	width: max-content;

	font-size: 4.7rem;
	font-weight: normal;
	text-align: center;
}

span {
	display: inline-block;

	color: #707070FF;

	transition: all 250ms ease-out;
	transform: translateY(0%);
}

span.selected {
	color: inherit;
}

span.completed {
	opacity: 20%;

	transform: translateY(100%);
}

html, body {
	height: 100%;
}

body {
	font-size: 16px;
	font-family: 'JetBrains Mono', monospace;
	color: #FFFFFFFF;
	user-select: none;
}

body, h1, p {
	margin: 0;
}

main {
	display: flex;
	justify-content: center; align-items: center;
	height: 100%;

	background: #000000FF;

	overflow: hidden;
}
