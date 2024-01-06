class LanguageChecker {
	#nextLanguageChecker; #comparison

	constructor(languageChecker, comparison) {
		this.#nextLanguageChecker = languageChecker; this.#comparison = comparison
	}

	/** @param {string} word @param {number} rule @returns {boolean} */
	compare(word, rule) {
		const equals = this.#comparison(rule, word)
		const hasNextChecker = typeof this.#nextLanguageChecker !== 'undefined'

		if (equals)
			return true
		else if (hasNextChecker) {
			const equals = this.#nextLanguageChecker.check(rule, word)
			return equals
		}
		return false
	}
}

const englishChecker = new LanguageChecker(undefined, (word, rule) => rule === 1 && word === currentWordToTranslate.english)
const russianChecker = new LanguageChecker(englishChecker, (word, rule) => rule === 0 && word === currentWordToTranslate.russian)

export const languageChecker = russianChecker
