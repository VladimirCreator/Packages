import { UITreeView } from '../UIView/UITreeView.mjs'

/**
	@implements {UITreeViewDelegate}
*/
export class UITreeViewController {
	#treeView = new UITreeView()

	constructor() {
		const treeView = this.#treeView
		treeView.delegate = this
		treeView.draw()
	}

	// MARK:- `UITreeViewDelegate`

	/** @param {HTMLElement} li */
	treeViewDidSelect(li) {
		window.postMessage(`GET https://api.application.com/files/${li.id}.json`)
	}
}
