import { Translator } from '../../Translator'

export class UIFormBuilder {
	/** @type {UIFormBuilder|undefined} */
	delegate

	/**
		@param {any} value
		@returns {string}
	*/
	build(key, value) {
		if (this.shouldHandle(key, value)) {
			return this.innerHTML(key) + (this.delegate?.build(key, value) ?? '')
		}
		return this.delegate?.build(key, value) ?? ''
	}

	shouldHandle(key, value) { return false }
	innerHTML(key, value) { return '' }
}

export class UIBooleanFormBuilder extends UIFormBuilder {
	shouldHandle(key, value) { return typeof value === 'boolean' ? true : false }
	innerHTML(key, value) {
		const div = document.createElement('div')
		const label = document.createElement('label')
		const input = document.createElement('input')

		div.className = 'form-check'

		label.className = 'form-check-label'
		label.innerText = Translator.shared.translate(key)

		input.id = key; input.className = 'form-check-input'
		input.type = 'checkbox'
		input.checked = value

		div.append(input); div.append(label)
		return div.outerHTML
	}
}

export class UINumberFormBuilder extends UIFormBuilder {
	shouldHandle(key, value) { return typeof value === 'number' ? true : false }
	innerHTML(key, value) {
		const div = document.createElement('div')
		const label = document.createElement('label')
		const input = document.createElement('input')

		label.className = 'form-label'
		label.innerText = Translator.shared.translate(key)

		input.id = key; input.className = 'form-control'
		input.type = 'number' /*input.placeholder=value*/

		div.append(label); div.append(input)
		return div.outerHTML
	}
}

export class UIStringFormBuilder extends UIFormBuilder {
	shouldHandle(key, value) { return typeof value === 'string' ? true : false }
	innerHTML(key, value) {
		const div = document.createElement('div')
		const label = document.createElement('label')
		const input = document.createElement('input')

		label.className = 'form-label'
		label.innerText = Translator.shared.translate(key)

		input.id = key; input.className = 'form-control'
		input.type = 'text' /*input.placeholder=value*/

		div.append(label); div.append(input)
		return div.outerHTML
	}
}

export class UIObjectFormBuilder extends UIFormBuilder {
	#data = new Map()

	shouldHandle(key, value) { return typeof value === 'object' ? true : false }
	innerHTML(key, value) {
		let transformed_key = Array.from(Translator.UITreeView.keys()).reduce(
			(candidate, element) => {
				if (element.includes(key)) return (candidate += element); else return candidate
			},
			''
		)
		if (transformed_key.length === 0) transformed_key = key

		const div = document.createElement('div')
		const label = document.createElement('label')
		const input = document.createElement('select')

		label.className = 'form-label'
		label.innerText = Translator.shared.translate(key)

		input.id = key; input.className = 'form-select'
		input.innerHTML += this.#data.get(transformed_key).reduce(
			(innerHTML, object) => (
				innerHTML += '<option>'.concat(object.toString()).concat('</option>')
			),
			''
		)
		div.append(label);div.append(input)
		return div.outerHTML
	}

	handle_object(object) {
		if (!Array.isArray(Object.values(object)[0])) return

		const data = this.#data
		data.set(Object.keys(object)[0], Object.values(object)[0])

		if (data.has('employees'))
			data.set('responsible', data.get('employees'))
	}
}
