import { UICellContentConfiguration } from './UICellContentConfiguration'
import { UIBranchCellContentConfiguration } from './UIBranchCellContentConfiguration'
import { Translator } from '../Translator'

export class UIRoomCellContentConfiguration extends UICellContentConfiguration {
	branch

	constructor(
		plain = {
			text: 'undefined', secondaryText: 'undefined', isHidden: false,
			branch: new UIBranchCellContentConfiguration()
		}
	) {
		super(plain)
		this.branch = plain.branch
	}

	get title() { return Translator.shared.translate('rooms') }

	static get plain() {
		return new UIRoomCellContentConfiguration({
			text: 'Text', secondaryText: 'Secondary Text.', isHidden: false,
			branch: new UIBranchCellContentConfiguration()
		})
	}
}
