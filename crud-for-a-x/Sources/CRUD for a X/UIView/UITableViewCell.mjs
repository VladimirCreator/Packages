export class UITableViewCell {
	/** @param {UICellContentConfiguration} contentConfiguration */
	constructor(contentConfiguration) { this.contentConfiguration = contentConfiguration }

	draw() {
		const markup = Object.keys(this.contentConfiguration).reduce(
			(markup, key) => {
				if(typeof this.contentConfiguration[key] === 'undefined') throw new Error()
				else return (
					markup += `<td>${this.contentConfiguration[key]}</td>`
				)
			}, ''
		)
		return markup
	}
}
