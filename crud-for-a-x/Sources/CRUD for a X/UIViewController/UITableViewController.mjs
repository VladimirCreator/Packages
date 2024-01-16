import { UITableView } from '../UIView/UITableView.mjs'

/**
	@implements {UITableViewDataSource}
	@implements {UITableViewDelegate}

	@implements {UIApplicationObserver}

	@implements {UIToolbarViewControllerDelegate}
*/
export class UITableViewController {
	/** @type {UICellContentConfiguration[]} */
	#data = []

	#tableView = new UITableView()

	/** @type {string|undefined} */
	#selectedConfiguration
	/** @type {number|undefined} */
	#selectedIndex

	constructor() {
		const tableView = this.#tableView
		tableView.dataSource = this; tableView.delegate = this
		tableView.draw()
	}

	// MARK:- `UITableViewDataSource` & `UITableViewDelegate`

	tableViewWillDraw() { return this.#data }
	tableViewDidSelect(tr, rowIndex) { this.#selectedIndex = rowIndex }

	// MARK:- `UIApplicationObserver`

	handle_object(object) {
		if(!Array.isArray(Object.values(object)[0])) return

		if (typeof this.#data !== 'undefined') {
			/*window.postMessage(`POST https://api.application.com/files/${this.#selectedConfiguration}.json | { "${this.#selectedConfiguration}": ${JSON.stringify(this.#data)}}`)*/
		}
		this.#selectedConfiguration = Object.keys(object)[0]
		this.#data = Object.values(object)[0]
		this.#tableView.draw()
	}

	// MARK:- `UIToolbarViewControllerDelegate`

	toolbarViewControllerDidAppendContentConfiguration(contentConfiguration) {
		this.#data.push(contentConfiguration); this.#tableView.draw()
	}

	toolbarViewControllerDidRemoveContentConfiguration(contentConfiguration) {
		if (this.#data.length <= 0) return
		this.#data = this.#data.filter(($0, index) => index !== this.#selectedIndex)
		this.#tableView.draw()
	}

	toolbarViewControllerDidReplaceContentConfiguration(contentConfiguration) {
		this.#data[this.#selectedIndex] = contentConfiguration; this.#tableView.draw()
	}
}
