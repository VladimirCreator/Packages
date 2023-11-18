import { UICellContentConfiguration } from './UICellContentConfiguration.mjs'
import { Translator } from '../Translator.mjs'

export class UIEquipmentCellContentConfiguration extends UICellContentConfiguration {
	equipment_type
	type_of_printing
	manufacturer
	model
	формат
	price
	serial_number
	inventory_number

	constructor(
		plain = {
			text: 'undefined', secondaryText: 'undefined', isHidden: false,
			equipment_type: 'undefined',
			type_of_printing: 'undefined',
			manufacturer: 'undefined',
			model: 'undefined',
			формат: 'undefined',
			price: 0,
			serial_number: 'undefined',
			inventory_number: 'undefined'
		}
	) {
		super(plain)
		this.equipment_type = plain.equipment_type
		this.type_of_printing = plain.type_of_printing
		this.manufacturer = plain.manufacturer
		this.model = plain.model
		this.формат = plain.формат
		this.price = plain.price
		this.serial_number = plain.serial_number
		this.inventory_number = plain.inventory_number
	}

	get title() { return Translator.shared.translate('equipment') }

	static get plain() {
		return new UIEquipmentCellContentConfiguration({
			text: 'Text', secondaryText: 'Secondary Text.', isHidden: false,
			equipment_type: 'Тип оборудования',
			type_of_printing: 'Тип печати',
			manufacturer: 'Производитель',
			model: 'Модель',
			формат: 'Формат',
			price: 0,
			serial_number: 'Серийный номер',
			inventory_number: 'Инвентаризационный номер'
		})
	}
}
