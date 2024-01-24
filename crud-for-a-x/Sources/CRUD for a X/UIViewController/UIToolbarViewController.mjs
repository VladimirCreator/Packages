import { Translator } from '../Translator'
import { crud_for_a_x } from '../UIApplication'
import { UIFormBuilder, UIBooleanFormBuilder, UINumberFormBuilder, UIStringFormBuilder, UIObjectFormBuilder } from '../UIView/UIFormBuilder/UIFormBuilder'
import { UIToolbarView } from '../UIView/UIToolbarView'

/**
	@callback UIToolbarViewControllerDelegateHandler
	@typedef {object} UIToolbarViewControllerDelegate
		@property {} toolbarViewDidSelectAppendContentConfiguration
		@property {} toolbarViewDidSelectRemoveContentConfiguration
		@property {} toolbarViewDidSelectReplaceContentConfiguration
*/

/**
	@implements {UIApplicationObserver}
	@implements {UIToolbarViewDelegate}
*/
export class UIToolbarViewController {
	#toolbarView = new UIToolbarView()
	#formBuilder = new UIFormBuilder()

	/** @type {UICellContentConfiguration|undefined} */
	#contentConfiguration

	/** @type {UIToolbarViewControllerDelegate|undefined} */
	delegate

	constructor() {
		this.#toolbarView.delegate = this

		const booleanFormBuilder = new UIBooleanFormBuilder()
		const numberFormBuilder = new UINumberFormBuilder()
		const stringFormBuilder = new UIStringFormBuilder()
		const objectFormBuilder = new UIObjectFormBuilder()

		this.#formBuilder.delegate = booleanFormBuilder
		booleanFormBuilder.delegate = numberFormBuilder
		numberFormBuilder.delegate = stringFormBuilder
		stringFormBuilder.delegate = objectFormBuilder

		crud_for_a_x.attachObserver(objectFormBuilder)

		document.querySelector('button#buttonAdd')?.addEventListener('click', event => this.didPressAddButton(event))
		document.querySelector('button#buttonEdit')?.addEventListener('click', event => this.didPressEditButton(event))
		document.querySelector('button#buttonRemove')?.addEventListener('click', event => this.didPressRemoveButton(event))

		for (const key of Translator.UITreeView.keys()) window.postMessage(`GET https://api.application.com/files/${key}.json`)
	}

	didPressAddButton(event) {
		const object = Object.assign({}, this.#contentConfiguration)

		document.querySelector('div#modalAdd')?.querySelectorAll('input').forEach(
			(input) => {
				if (typeof object[input.id] === 'boolean') {
					object[input.id] = input.checked ? true : false
					return
				}
				object[input.id] = input.value
			}
		)
		this.delegate?.toolbarViewControllerDidAppendContentConfiguration(object)
	}

	didPressEditButton(event) {
		const object = Object.assign({}, this.#contentConfiguration)

		document.querySelector('div#modalEdit')?.querySelectorAll('input').forEach(
			(input) => {
				if (typeof object[input.id] === 'boolean') {
					object[input.id] = input.checked ? true : false
					return
				}
				object[input.id] = input.value
			}
		)
		this.delegate?.toolbarViewControllerDidReplaceContentConfiguration(object)
	}

	didPressRemoveButton(event) {
		this.delegate?.toolbarViewControllerDidRemoveContentConfiguration()
	}

	// MARK:- `UIToolbarViewDelegate`

	toolbarViewDidSelectAppend(toolbarView) {
		const selector = ['div#modalAdd','div.modal-body','form.vstack'].join('>')

		document.querySelector(selector).innerHTML = Object.keys(this.#contentConfiguration).reduce(
			(accumulator, key) => (
				accumulator += this.#formBuilder.build(key, this.#contentConfiguration[key])
			), ''
		)
	}
	toolbarViewDidSelectRemove(toolbarView) {}
	toolbarViewDidSelectReplace(toolbarView) {
		const selector = ['div#modalEdit','div.modal-body','form.vstack'].join('>')

		document.querySelector(selector).innerHTML = Object.keys(this.#contentConfiguration).reduce(
			(accumulator, key) => (
				accumulator += this.#formBuilder.build(key, this.#contentConfiguration[key])
			), ''
		)
	}

	// MARK:- `UIApplicationObserver`

	handle_object(object) {
		const contentConfiguration = Object.values(object)[0][0]

		for (const key in contentConfiguration) {
			const hasTranslation = Translator.UITableView.has(key)
			if(!hasTranslation) return
		}
		this.#contentConfiguration = contentConfiguration
	}
}
