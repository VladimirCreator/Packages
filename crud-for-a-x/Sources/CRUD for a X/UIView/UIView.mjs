export class UIView {
	constructor() {
		const colors = ['#FF3B30', '#FF9500', '#FFCC00', '#34C759', '#00C7BE', '#30B0C7', '#32ADE6', '#007AFF', '#5856D6', '#AF52DE', '#FF2D55', '#A2845E']

		document.body.style.setProperty(
			'--light-tint-color',
			colors[Math.floor(Math.random() * colors.length)]
		)
		this.#prepare(); this.#animate()

		this.#about?.addEventListener('click', (event) => {
				if (event.currentTarget instanceof Element) event.currentTarget.remove()
			}
		)
	}

	#prepare() {
		const elements = document.querySelectorAll('*')
		elements.forEach(element => {
				if (element.hasAttribute('hidden')) element.removeAttribute('hidden')
			}
		)
	}

	#animate() {
		let delay = 0
		const createLetter = (character) => {
			const letter = Object.assign(document.createElement('span'), {
				className: 'letter',
				innerHTML: character === ' ' ? '&nbsp;' : character
			})
			this.#copyright.insertAdjacentElement('beforebegin', letter)
			return letter
		}
		const playAnimation = element => element.getAnimations()[0].play()
		const setAnimation = (element, index, elements) => {
			if (index >= 14) return

			const [beforeElement, afterElement] = [
				elements[Math.floor(elements.length / 2 - index)],
				elements[Math.floor(elements.length / 2 + index)]
			]
			setTimeout(playAnimation, delay, beforeElement)
			if (beforeElement !== afterElement) {
				setTimeout(playAnimation, delay, afterElement)
			}
			delay += 12
		}
		Array.from('Vladimir Leonidovich Petrov', createLetter).forEach(setAnimation)
	}

	get #about() {
		const selector = ['article#UIView','header#about'].join('>')
		const about = document.querySelector(selector)
		if (about instanceof HTMLElement) return about; throw new Error()
	}

	get #copyright() {
		const selector = ['article#UIView','header#about','address#legal','h1','small#copyright'].join('>')
		const copyright = document.querySelector(selector)
		if (copyright instanceof HTMLElement) return copyright; throw new Error()
	}
}
