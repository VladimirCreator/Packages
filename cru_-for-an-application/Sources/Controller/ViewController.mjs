import pencilSquare from '../../public/pencil-square.svg'
import plusCircle from '../../public/plus-circle.svg'
import { Application } from '../Application'
import { view } from '../garbage'
import { UIFormViewController } from './FormViewController'
import { keys } from '../garbage'
import { AddFormState, UpdateFormState } from './FormViewController'

export class ViewController {

	// MARK: Properties

	/** @type {number|undefined} */
	#selectedRowIndex = undefined

	#chart = document.querySelector('canvas#interceptedRequests')

	// MARK: Constructors

	constructor(flag = true) {
		if (flag) throw new Error()

		view.delegate = this

		Application.shared.attachObserver(this)
		Application.shared.attachObserver(UIFormViewController.shared)
		Application.shared.download()

		UIFormViewController.shared.dataSource = this
	}

	// MARK: Methods

	loadView() {
		document.body.prepend(this.addButton)

		view.modal.addEventListener('hide.bs.modal', view.delegate.modalDidHide)
		view.modal.addEventListener('show.bs.modal', view.delegate.modalDidShow)

		for (const key of [...keys, ' ']) {
			const row = view.table.querySelector('thead > tr')
			row.insertAdjacentHTML(
				'beforeend',
				`<th scope=col>${key}</th>`
			)
		}

		new Chart(this.#chart, {
			type: 'bar', data: {
				labels: Array.from(Array(12), (number, index) => {
					let initialDate = new Date()
					initialDate = new Date(initialDate - index * 18 * 60 * 1000)

					return initialDate.toLocaleTimeString(undefined, { timeStyle: 'short' })
				}).reverse(),
				datasets: [
					{
						label: 'Перехваченные запросы',
						data: Array.from(Array(12), _ => Math.floor(Math.random() * 1000)),
						backgroundColor: ['aquamarine', 'antiquewhite', 'coral', 'springgreen']
					}
				]
			}
		})
	}

	applicationDidFetch(object) {
		if (!Array.isArray(object)) { return }

		view.table.querySelector('tbody').innerHTML = ''
		object.forEach(application => {
			const tr = document.createElement('tr')
			for (const key in application) {
				const td = document.createElement('td')
				td.innerText = application[key]
				tr.insertAdjacentElement('beforeend', td)
			}
			tr.insertAdjacentElement('beforeend', this.editButton)

			view.table.querySelector('tbody').insertAdjacentElement('beforeend', tr)
		})
		view.table.querySelectorAll('tbody > tr').forEach((tr, trIndex) => tr.addEventListener('click', event => view.delegate.tableDidClick(event, trIndex), true))
	}

	tableDidClick(event, trIndex) { this.#selectedRowIndex = trIndex }

	modalDidHide(event) {}; modalDidShow(event) {}

	addButtonDidClick(event) {
		UIFormViewController.shared.state = new AddFormState(); UIFormViewController.shared.present()
	}
	editButtonDidClick(event) {
		UIFormViewController.shared.state = new UpdateFormState(); UIFormViewController.shared.present(Application.shared.applications[this.#selectedRowIndex])
	}

	// MARK: Getters

	get addButton() {
		const button = document.createElement('button')

		button.className = 'btn btn-success mb-2'
		button.innerHTML = plusCircle; button.innerHTML += 'Добавить приложение'
		button.addEventListener('click', event => this.addButtonDidClick(event))

		return button
	}

	get editButton() {
		const td = document.createElement('td')
		const button = document.createElement('button')

		button.className = 'btn btn-primary'
		button.innerHTML = pencilSquare
		button.addEventListener('click', event => this.editButtonDidClick(event))

		td.append(button)
		return td
	}

	// MARK: ...

	/** @type {ViewController|undefined} */
	static #shared
	static get shared() {
		if (typeof ViewController.#shared === 'undefined') {
			ViewController.#shared = new ViewController(false)
		}
		return ViewController.#shared
	}
}
