import { UICellContentConfiguration } from './UICellContentConfiguration.mjs'
import { Translator } from '../Translator.mjs'

export class UIDepartmentCellContentConfiguration extends UICellContentConfiguration {
	employee_count
	equipment_count

	constructor(
		plain = {
			text: 'undefined', secondaryText: 'undefined', isHidden: false,
			employee_count: 0,
			equipment_count: 0,
		}
	) {
		super(plain)
		this.employee_count = plain.employee_count
		this.equipment_count = plain.equipment_count
	}

	get title() { return Translator.shared.translate('departments') }

	static get plain() {
		return new UIDepartmentCellContentConfiguration({
			text: 'Text', secondaryText: 'Secondary Text.', isHidden: false,
			employee_count: 0,
			equipment_count: 0,
		})
	}
}
