import { UICellContentConfiguration } from './UICellContentConfiguration.mjs'
import { UIBranchCellContentConfiguration } from './UIBranchCellContentConfiguration.mjs'
import { Translator } from '../Translator.mjs'

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
