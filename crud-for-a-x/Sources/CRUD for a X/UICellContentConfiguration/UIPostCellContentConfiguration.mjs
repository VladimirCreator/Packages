import { UICellContentConfiguration } from './UICellContentConfiguration.mjs'
import { Translator } from '../Translator.mjs'

export class UIPostCellContentConfiguration extends UICellContentConfiguration {
	employee_count

	constructor(
		plain = {
			text: 'undefined', secondaryText: 'undefined', isHidden: false,
			employee_count: 0
		}
	) {
		super(plain)
		this.employee_count = plain.employee_count
	}

	get title() { return Translator.shared.translate('posts') }

	static get plain() {
		return new UIPostCellContentConfiguration({
			text: 'Text', secondaryText: 'Secondary Text.', isHidden: false,
			employee_count: 0
		})
	}
}
