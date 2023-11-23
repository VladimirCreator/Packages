import { random } from '../../random'

const article = document.body.querySelector('article')

const header = article.querySelector('header')
const main = article.querySelector('main')

const continueButton = header.querySelector('button')

const handleLoad = () => {
	const color = palette[random(palette.length)]

	header.style.background = color, continueButton.style.backgroundColor = color

	const handleClick = (event) => {
		header.style.animation = 'swipe-out-left .75s cubic-bezier(0, .75, .05, 1) forwards'
		main.removeAttribute('hidden')
	}
	continueButton.addEventListener('click', handleClick)
}

window.addEventListener('load', handleLoad)
