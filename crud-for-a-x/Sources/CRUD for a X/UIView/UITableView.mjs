import { Translator } from '../Translator.mjs'
import { UITableViewCell } from './UITableViewCell.mjs'

/**
	@typedef {object} UITableViewDataSource
		@property {() => UICellContentConfiguration[]} tableViewWillDraw
	@typedef {object} UITableViewDelegate
		@property {(rowIndex: number) => void} tableViewDidSelect
*/
export class UITableView {
	get #table() {
		const selector = ['article#UIView','article#application','section#editor','div#UITableView','table#table','tbody'].join('>')
		const table = document.querySelector(selector)

		if (table instanceof HTMLTableSectionElement) return table; else throw new Error()
	}

	/** @type {UITableViewDataSource|undefined} */
	dataSource
	/** @type {UITableViewDelegate|undefined} */
	delegate

	draw() {
		const table = this.#table

		if (!this.dataSource || !this.dataSource.tableViewWillDraw()[0]) {
			table.innerHTML = ''; return
		}

		table.parentElement.querySelector('thead').innerHTML = '<tr>' +
			Object.keys(this.dataSource?.tableViewWillDraw()[0]).reduce(
				(html, key) => (
						html += `<th>
							${Translator.shared.translate(key)}
						</th>`
					), ''
				) +
		'</tr>'

		table.innerHTML = this.dataSource.tableViewWillDraw()
			.map(contentConfiguration => `<tr>${new UITableViewCell(contentConfiguration).draw()}</tr>`)
			.reduce((finalMarkup, markup) => finalMarkup += markup)

		table.querySelectorAll('tr:has(td)').forEach(
			(tr, index) =>
				tr.addEventListener(
					'click', () => {
						table.querySelectorAll(`tr.table-active`).forEach(tr => tr.removeAttribute('class'))
						tr.className = 'table-active'
						this.delegate?.tableViewDidSelect(tr, index)
					}
				)
		)
		table.parentElement.caption.textContent = this.dataSource.tableViewWillDraw()[0].title
	}
}
