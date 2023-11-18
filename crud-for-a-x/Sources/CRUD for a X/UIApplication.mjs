import { User } from './User.mjs'
import { UIBranchCellContentConfiguration } from './UICellContentConfiguration/UIBranchCellContentConfiguration.mjs'
import { UIRoomCellContentConfiguration } from './UICellContentConfiguration/UIRoomCellContentConfiguration.mjs'
import { UIDepartmentCellContentConfiguration } from './UICellContentConfiguration/UIDepartmentCellContentConfiguration.mjs'
import { UIWarehouseCellContentConfiguration } from './UICellContentConfiguration/UIWarehouseCellContentConfiguration.mjs'
import { UIEmployeeCellContentConfiguration } from './UICellContentConfiguration/UIEmployeeCellContentConfiguration.mjs'
import { UIEquipmentCellContentConfiguration } from './UICellContentConfiguration/UIEquipmentCellContentConfiguration.mjs'
import { UIConsumableCellContentConfiguration } from './UICellContentConfiguration/UIConsumableCellContentConfiguration.mjs'
import { UIPostCellContentConfiguration } from './UICellContentConfiguration/UIPostCellContentConfiguration.mjs'
import { UIViewController } from './UIViewController/UIViewController.mjs'

/**
	@typedef {object} UIApplicationObserver
		@callback UIApplicationObserverHandler
			@param {object} object
			@returns {void}
		@property {UIApplicationObserverHandler} handle_object
*/

/** @implements {UIApplicationObserver} */
export class UIApplication {
	/** @type {UIApplication|undefined} */
	static #shared
	static get shared() {
		if (typeof UIApplication.#shared === 'undefined') {
			UIApplication.#shared = new UIApplication(true)
		}
		return UIApplication.#shared
	}

	/** @type {UIApplicationObserver[]} */
	#observers = []

	/** @type {UIViewController} */
	viewController

	constructor(override = false) {
		if(!override) throw new Error()
	}

	/** @param {UIApplicationObserver} observer */
	attachObserver(observer) { this.#observers.push(observer) }
	/** @param {UIApplicationObserver} observer */
	detachObserver(observer) { this.#observers = this.#observers.filter((element) => element !== observer) }

	/** @param {string} text */
	parse(text) {
		let object

const _ = () => Math.round(Math.random() * 0xFF)
if (text.includes('branches')) {
	object = JSON.parse(
		`{"branches":${JSON.stringify(
			Array.from(Array(0xFF), ($0, $1) => ({
				text: `Пример названия филиала ${_()}`, secondaryText: `Пример описания филиала ${_()}`, isHidden: Boolean(Math.round(Math.random())), address: `Пример адреса филиала ${_()}`
			}))
		)}}`, this.#reviver
	)
}
else if (text.includes('rooms')) {
	object = JSON.parse(
		`{"rooms":${JSON.stringify(
			Array.from(Array(0xff), ($0, $1) => ({
				text: `Пример названия помещения ${_()}`, secondaryText: `Пример описания помещения ${_()}`, isHidden: Boolean(Math.round(Math.random())), address: `Пример адреса помещения ${_()}`,
				branch: { text: `Пример названия филиала ${_()}`, secondaryText: `Пример описания филиала ${_()}`, isHidden: Boolean(Math.round(Math.random())), address: `Пример адреса филиала ${_()}`} }))
		)}}`, this.#reviver
	)
}
else if (text.includes('warehouses')) {
	object = JSON.parse(
		`{"warehouses":${JSON.stringify(
			Array.from(Array(0xff), ($0, $1) => ({
				text: `Пример названия склада ${_()}`, secondaryText: `Пример описания склада ${_()}`, isHidden: Boolean(Math.round(Math.random())), address: `Пример адреса склада ${_()}`,
				branch: { text: `Пример названия филиала ${_()}`, secondaryText: `Пример описания филиала ${_()}`, isHidden: Boolean(Math.round(Math.random())), address: `Пример адреса филиала ${_()}` },
				responsible: UIEmployeeCellContentConfiguration.plain
			}))
		)}}`, this.#reviver
	)
}
else if (text.includes('departments')) {
	object = JSON.parse(
		`{"departments":${JSON.stringify(
			Array.from(Array(0xff), ($0, $1) => ({
				text: `Пример названия отдела ${_()}`, secondaryText: `Пример описания отдела ${_()}`, isHidden: Boolean(Math.round(Math.random())), address: `Пример адреса отдела ${_()}`, employee_count: _(), equipment_count: _()
			}))
		)}}`, this.#reviver
	)
}
else if (text.includes('employees')) {
	object = JSON.parse(
		`{"employees":${JSON.stringify(
			Array.from(Array(0xff), ($0, $1) => UIEmployeeCellContentConfiguration.plain)
		)}}`, this.#reviver
	)
}
else if (text.includes('equipment')) {
	object = JSON.parse(
		`{"equipment":${JSON.stringify(
			Array.from(Array(0xff), ($0, $1) => UIEquipmentCellContentConfiguration.plain)
		)}}`, this.#reviver
	)
}
else if (text.includes('consumables')) {
	object = JSON.parse(
		`{"consumables":${JSON.stringify(
			Array.from(Array(0xff), ($0, $1) => UIConsumableCellContentConfiguration.plain)
		)}}`, this.#reviver
	)
}
else if (text.includes('posts')) {
	object = JSON.parse(
		`{"posts":${JSON.stringify(
			Array.from(Array(0xff), ($0, $1) => ({
				text: `"ример названия должности ${_()}`, secondaryText: `"ример описания должности ${_()}`,isHidden: Boolean(Math.round(Math.random())),employee_count: Math.round(Math.random() * 0x255)
			}))
		)}}`, this.#reviver
	)
}
else if (text.includes('user')) {
	object = JSON.parse(
		`{"user":${JSON.stringify(new User({ savedName: '', savedPassword: '' }))}}`, this.#reviver
	)
}
else if (typeof text.match(/\/.json$/) === null) return
		else object = JSON.parse(text, this.#reviver)

		this.#observers.forEach(observer => observer.handle_object(object))
		return object
	}

	/**
		@param {string} key
		@param {any} value
		@returns {void}
	 */
	#reviver(key, value) {
		switch (key) {
		case 'dateTime': return new Date(value)
		case 'user': return new User(value)
		case 'branch': return new UIBranchCellContentConfiguration(value)
		case 'room': return new UIRoomCellContentConfiguration(value)
		case 'department': return new UIDepartmentCellContentConfiguration(value)
		case 'responsible': return new UIEmployeeCellContentConfiguration(value)

		case 'branches':
		if (value.length === 0) return [UIBranchCellContentConfiguration.plain]
		return value.map(object => new UIBranchCellContentConfiguration(object))
		case 'rooms':
		if (value.length === 0) return [UIRoomCellContentConfiguration.plain]
		return value.map(object => new UIRoomCellContentConfiguration(object))
		case 'warehouses':
		if (value.length === 0) return [UIWarehouseCellContentConfiguration.plain]
		return value.map(object => new UIWarehouseCellContentConfiguration(object))
		case 'departments':
		if (value.length === 0) return [UIDepartmentCellContentConfiguration.plain]
		return value.map(object => new UIDepartmentCellContentConfiguration(object))
		case 'employees':
		if (value.length === 0) return [UIEmployeeCellContentConfiguration.plain]
		return value.map(object => new UIEmployeeCellContentConfiguration(object))
		case 'equipment':
		if (value.length === 0) return [UIEquipmentCellContentConfiguration.plain]
		return value.map(object => new UIEquipmentCellContentConfiguration(object))
		case 'consumables':
		if (value.length === 0) return [UIConsumableCellContentConfiguration.plain]
		return value.map(object => new UIConsumableCellContentConfiguration(object))
		case 'posts':
		if (value.length === 0) return [UIPostCellContentConfiguration.plain]
		return value.map(object => new UIPostCellContentConfiguration(object))

		default: return value
		}
	}

	// MARK:- `UIApplicationObserver`

	/** @param {object} object */
	handle_object(object) {
		if (typeof object.dateTime === 'undefined') return
		else try {
				UIApplication.shared.viewController = new UIViewController(object.dateTime)
			}
		catch (exception) {
			window.alert(exception.message)
		}
		finally {
			UIApplication.shared.detachObserver(UIApplication.shared)
		}
	}
}
