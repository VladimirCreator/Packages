/**
	@typedef {object} UIToolbarViewDelegate
		@property {($0: UIToolbarView) => void} toolbarViewDidSelectAppend
		@property {($0: UIToolbarView) => void} toolbarViewDidSelectRemove
		@property {($0: UIToolbarView) => void} toolbarViewDidSelectReplace
*/
export class UIToolbarView {
	get #toolbar() {
		const selector = ['article#UIView','article#application','section#editor','form#UIToolbarView'].join('>')
		const toolbar = document.querySelector(selector)

		if (toolbar instanceof HTMLFormElement) return toolbar; else throw new Error()
	}

	/** @type {UIToolbarViewDelegate|undefined} */
	delegate

	constructor() {
		const toolbar = this.#toolbar
		const clickHandler = (event) => {
			const instanceOfElement = event.target instanceof Element
			if(!instanceOfElement) return

			switch (event.target.id) {
			case 'add': this.delegate?.toolbarViewDidSelectAppend(this)
			break
			case 'remove': this.delegate?.toolbarViewDidSelectRemove(this)
			break
			case 'replace': this.delegate?.toolbarViewDidSelectReplace(this)
			break
			}
		}
		toolbar.addEventListener('click', clickHandler)
	}
}
