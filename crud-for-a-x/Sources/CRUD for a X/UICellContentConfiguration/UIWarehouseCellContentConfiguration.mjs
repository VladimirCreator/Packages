import { UICellContentConfiguration } from './UICellContentConfiguration'
import { Translator } from '../Translator'

export class UIWarehouseCellContentConfiguration extends UICellContentConfiguration {
	branch
	responsible

	constructor(
		plain = {
			text: 'undefined', secondaryText: 'undefined', isHidden: false,
			branch: new UIBranchCellContentConfiguration(),
			responsible: new UIEmployeeCellContentConfiguration(),
		}
	) {
		super(plain)
		this.branch = plain.branch
		this.responsible = plain.responsible
	}

	get title() { return Translator.shared.translate('warehouses') }

	static get plain() {
		return new UIWarehouseCellContentConfiguration({
			text: 'Text', secondaryText: 'Secondary Text.', isHidden: false,
			branch: new UIBranchCellContentConfiguration(),
			responsible: new UIEmployeeCellContentConfiguration(),
		})
	}
}
