import { UICellContentConfiguration } from './UICellContentConfiguration'
import { Translator } from '../Translator'

export class UIBranchCellContentConfiguration extends UICellContentConfiguration {
	address

	constructor(
		plain = {
			text: 'undefined', secondaryText: 'undefined', isHidden: false,
			address: 'undefined'
		}
	) {
		super(plain)
		this.address = plain.address
	}

	get title() { return Translator.shared.translate('branches') }

	static get plain() {
		return new UIBranchCellContentConfiguration({
			text: 'Text', secondaryText: 'Secondary Text.', isHidden: false,
			address: 'Address.'
		})
	}
}
