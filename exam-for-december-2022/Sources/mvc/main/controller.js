import words from '../../../words.json'
import { random } from '../../random'
import { model } from './model'

const getRandomWord = () => words[random(words.length)]

// `0` means отображение по-английски, а принимается по-русски. `1` means отображение по-русски, а принимается по-английски.
let currentRule = 0
let wordToGuess = getRandomWord()

const compare = () => {
	model.compare()
}

/** @param {number} currentRule @param {string} currentWord @returns {void} */
const updateWordToTranslate = (currentRule, currentWord) => {
	switch (currentRule) {
	case 0: view.setQuestion(currentWord.english); break
	case 1: view.setQuestion(currentWord.russian); break
	}
}

/** @param {boolean} correctness @param {{ english: string, russian: string }} word */
const didGuess = (correctness, word) => {
	const text = correctness ? 'Продолжайте в том же духе!' : (`Вот, как переводится ${word.english}: ${word.russian}`)

	wordToGuess = getRandomWord()
	view.setQuestion(wordToGuess);  view.setMessage(text); view.setCorrectness(correctness); view.setStdin('')
}

export const controller = { compare, didGuess }
