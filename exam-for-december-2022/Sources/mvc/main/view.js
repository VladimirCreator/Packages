const question = document.querySelectorAll('section')[0]
const description = document.querySelectorAll('section')[1]
const stdin = question.querySelector('input')

/** @param {string} text */
const setQuestion = (text) => {
	const word = question.querySelector('em')
	word.innerText = text
	word.getAnimations().forEach(animation => animation.play())
}

/** @param {string} text */
const setDescription = (text) => {
	const paragraph = description.querySelector('p')
	paragraph.innerHTML = `<em></em> ${text}`

	description.style.opacity = 100
	setTimeout(
		() => description.style.opacity = 0, 2500
	)
}

/** @param {boolean} correctness */
const setCorrectness = (correctness) => {
	const status = description.querySelector('em')

	if (correctness) {
		status.innerHTML = 'Верно!<br>'; status.style.color = palette[3]
		question.classList.add('correct')
	}
	else {
		status.innerHTML = 'Неверно!<br>'; status.style.color = palette[0]
		question.classList.add('incorrect')
	}
	question.addEventListener('animationend', event => event.target.removeAttribute('class'))
}

/** @param {string} text @returns {void} */
const setStdin = (text) => stdin.value = text

export const view = {
	setQuestion, setDescription, setCorrectness, setStdin
}

const palette = ['#ff3b30', '#ff9500', '#ffcc00', '#34c759', '##00c7be', '#30b0c7', '##32ade6', '#007aff', '#5856d6', '#af52de', '#ff2d55', '##a2845e']

const onLoad = () => {
	document.querySelector('header').style.background = palette[random(palette.length)]
	document.querySelector('button').style.backgroundColor = document.querySelector('footer').style.background
}
