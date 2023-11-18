import { UICellContentConfiguration } from './UICellContentConfiguration.mjs'
import { Translator } from '../Translator.mjs'

export class UIConsumableCellContentConfiguration extends UICellContentConfiguration {
	type_of_consumable
	color
	manufacturer
	compatibility_local
	compatibility_global
	code_of_model
	resource
	reserve

	constructor(
		plain = {
			text: 'undefined', secondaryText: 'undefined', isHidden: false,
			type_of_consumable: 'undefined',
			color: 'undefined',
			manufacturer: 'undefined',
			compatibility_local: 'undefined',
			compatibility_global: 'undefined',
			code_of_model: 'undefined',
			resource: 0,
			reserve: 0
		}
	) {
		super(plain)
		this.type_of_consumable = plain.type_of_consumable
		this.color = plain.color
		this.manufacturer = plain.manufacturer
		this.compatibility_local = plain.compatibility_local
		this.compatibility_global = plain.compatibility_global
		this.code_of_model = plain.code_of_model
		this.resource = plain.resource
		this.reserve = plain.reserve
	}

	get title() { return Translator.shared.translate('consumables') }

	static get plain() {
		return new UIConsumableCellContentConfiguration({
			text: 'Text', secondaryText: 'Secondary Text.', isHidden: false,
			type_of_consumable: `Тип расходного материала`,
			color: `Цвет`,
			manufacturer: `Производитель`,
			compatibility_local: `Совместимость (локальная)`,
			compatibility_global: 'Совместимость (глобальная)',
			code_of_model: 'Код модели',
			resource: 0,
			reserve: 0
		})
	}
}
