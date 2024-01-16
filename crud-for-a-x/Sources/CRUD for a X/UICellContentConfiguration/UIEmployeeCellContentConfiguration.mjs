import { UICellContentConfiguration } from './UICellContentConfiguration'
import { UIDepartmentCellContentConfiguration, UIRoomCellContentConfiguration } from './'
import { Translator } from '../Translator'

export class UIEmployeeCellContentConfiguration extends UICellContentConfiguration {
	firstname; lastname; patronymic
	post
	department
	room
	phone

	constructor(
		plain = {
			text: 'undefined', secondaryText: 'undefined', isHidden: false,
			firstname: 'undefined', lastname: 'undefined', patronymic: 'undefined',
			post: 'undefined',
			department: new UIDepartmentCellContentConfiguration(),
			room: new UIRoomCellContentConfiguration(),
			phone: 'undefined'
		}
	) {
		super(plain)
		this.firstname = plain.firstname; this.lastname = plain.lastname; this.patronymic = plain.patronymic
		this.post = plain.post
		this.department = plain.department
		this.room = plain.room
		this.phone = plain.phone
	}

	toString() {
		const firstnameFirstLetter = this.firstname.at(0).toUpperCase()
		const patronymicFirstLetter = this.patronymic.at(0).toUpperCase()

		return `${firstnameFirstLetter}. ${patronymicFirstLetter}. ${this.lastname}`
	}

	get title() { return Translator.shared.translate('employees') }

	static get plain() {
		return new UIEmployeeCellContentConfiguration({
			text: 'Text', secondaryText: 'Secondary Text.', isHidden: false,
			firstname: `First Name`, lastname: `Last Name`, patronymic: 'Patronymic',
			post: 'Должность',
			department: UIDepartmentCellContentConfiguration.plain,
			room: UIRoomCellContentConfiguration.plain,
			phone: 'Номер телефона'
		})
	}
}
