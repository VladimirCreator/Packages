import { languageChecker } from '../../LanguageChecker'
import { controller } from './controller'

/** @param {{ english: string, russian: string }} word @param {number} rule @returns {void} */
const compare = (word, rule) => {
	const guessed = languageChecker.compare(word, rule)
	this.delegate?.didGuess(guessed, word)
}

export const model = { delegate: controller,
	compare
}
