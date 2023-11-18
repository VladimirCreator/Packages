export class UICellContentConfiguration {
	text; secondaryText
	isHidden

	constructor(
		plain = { text: 'undefined', secondaryText: 'undefined', isHidden: false }
	) {
		this.text = plain.text
		this.secondaryText = plain.secondaryText
		this.isHidden = plain.isHidden
	}

	toString() { return this.text }

	get title() { throw new Error() }

	static get plain() {
		return new UICellContentConfiguration({
			text: 'Text', secondaryText: 'Secondary Text.', isHidden: false
		})
	}
}
