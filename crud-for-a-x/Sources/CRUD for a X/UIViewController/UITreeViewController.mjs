import { UITreeView } from '../UIView/UITreeView'

/** @implements {UITreeViewDelegate} */
export class UITreeViewController {
	#treeView = new UITreeView()

	constructor() {
		this.#treeView.delegate = this
		this.#treeView.draw()
	}

	// MARK:- `UITreeViewDelegate`

	/** @param {HTMLElement} li */
	treeViewDidSelect(li) {
		window.postMessage(`GET https://api.application.com/files/${li.id}.json`)
	}
}
