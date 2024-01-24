import { Translator } from '../Translator'

const wordsToTranslate = [...Translator.UITreeView.keys()]

/**
	@typedef {object} UITreeViewDelegate
		@callback UITreeViewDelegateHandler
			@param {HTMLElement} tableViewCell
			@returns {void}

		@property {UITreeViewDelegateHandler} treeViewDidSelect
*/
export class UITreeView {
	get #tree() {
		const selector = ['article#UIView','article#application','aside','div','nav#UITreeView'].join('>')
		const tree = document.querySelector(selector)

		if (tree instanceof HTMLElement) return tree; else throw new Error()
	}

	/** @type {UITreeViewDelegate|undefined} */
	delegate

	draw() {
		const tree = this.#tree

		const buttonsHTML = wordsToTranslate.reduce(
			(html, word) => (
				html += `<button id=${word} class='list-group-item list-group-item-action'>
					${Translator.shared.translate(word)}
				</button>`
			), ''
		)
		tree.querySelector(`div.list-group`).innerHTML = buttonsHTML

		const clickHandler = event => {
			if (event.target instanceof HTMLButtonElement) {
				this.delegate?.treeViewDidSelect(event.target)
			}
		}
		tree.querySelectorAll('button').forEach(button => button.addEventListener('click', clickHandler))
	}
}
