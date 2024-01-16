import random from 'lodash-es/random' // 4:02 PM Mon 15 Jan 2024

import { User } from './User.mjs'
import {
	UIBranchCellContentConfiguration,
	UIRoomCellContentConfiguration,
	UIDepartmentCellContentConfiguration,
	UIWarehouseCellContentConfiguration,
	UIEmployeeCellContentConfiguration,
	UIEquipmentCellContentConfiguration,
	UIConsumableCellContentConfiguration,
	UIPostCellContentConfiguration
} from './UICellContentConfiguration/index.mjs'
import { UIViewController } from './UIViewController/index.mjs'

/**
	@typedef {object} UIApplicationObserver
		@callback UIApplicationObserverHandler
			@param {object} object
			@returns {void}
		@property {UIApplicationObserverHandler} handle_object
*/

const map = {
	dateTime: Date,
	user: User,
	branch: UIBranchCellContentConfiguration,
	room: UIRoomCellContentConfiguration,
	department: UIDepartmentCellContentConfiguration,
	responsible: UIEmployeeCellContentConfiguration
}

const populate = (contentConfiguration, value) => {
	if (value.length === 0) return [contentConfiguration.plain]
	return value.map(object => new contentConfiguration(object))
}

/**
	@param {string} key
	@param {unknown[]|unknown} value
	@returns {void}
*/
const reviver = (key, value) => {
	if (key in map)
		return new map[key](value)
	else if (Array.isArray(value))
		switch (key) {
		case 'branches': return populate(UIBranchCellContentConfiguration, value)
		case 'rooms': return populate(UIRoomCellContentConfiguration, value)
		case 'warehouses': return populate(UIWarehouseCellContentConfiguration, value)
		case 'departments': return populate(UIDepartmentCellContentConfiguration, value)
		case 'employees': return populate(UIEmployeeCellContentConfiguration, value)
		case 'equipment': return populate(UIEquipmentCellContentConfiguration, value)
		case 'consumables': return populate(UIConsumableCellContentConfiguration, value)
		case 'posts': return populate(UIPostCellContentConfiguration, value)
		default: return value
	}
	return value
}

/* in:2:17 PM...: PM Mon 15 Jan 2024
const createParse = reviver => json => undefined
*/

/** @implements {UIApplicationObserver} */
class UIApplication {
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
	parse(text) { if (typeof text === 'object' && 'source' in text) return
		let object

const _ = () => Math.round(Math.random() * 0xFF)
if (text.includes('branches')) {
	object = JSON.parse(
		`{"branches":${JSON.stringify(
			Array.from(Array(0xFF), ($0, $1) => ({
				text: `Пример названия филиала ${_()}`, secondaryText: `Пример описания филиала ${_()}`, isHidden: Boolean(Math.round(Math.random())), address: `Пример адреса филиала ${_()}`
			}))
		)}}`, reviver
	)
}
else if (text.includes('rooms')) {
	object = JSON.parse(
		`{"rooms":${JSON.stringify(
			Array.from(Array(0xff), ($0, $1) => ({
				text: `Пример названия помещения ${_()}`, secondaryText: `Пример описания помещения ${_()}`, isHidden: Boolean(Math.round(Math.random())), address: `Пример адреса помещения ${_()}`,
				branch: { text: `Пример названия филиала ${_()}`, secondaryText: `Пример описания филиала ${_()}`, isHidden: Boolean(Math.round(Math.random())), address: `Пример адреса филиала ${_()}`} }))
		)}}`, reviver
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
		)}}`, reviver
	)
}
else if (text.includes('departments')) {
	object = JSON.parse(
		`{"departments":${JSON.stringify(
			Array.from(Array(0xff), ($0, $1) => ({
				text: `Пример названия отдела ${_()}`, secondaryText: `Пример описания отдела ${_()}`, isHidden: Boolean(Math.round(Math.random())), address: `Пример адреса отдела ${_()}`, employee_count: _(), equipment_count: _()
			}))
		)}}`, reviver
	)
}
else if (text.includes('employees')) {
	object = JSON.parse(
		`{"employees":${JSON.stringify(
			Array.from(Array(0xff), ($0, $1) => UIEmployeeCellContentConfiguration.plain)
		)}}`, reviver
	)
}
else if (text.includes('equipment')) {
	object = JSON.parse(
		`{"equipment":${JSON.stringify(
			Array.from(Array(0xff), ($0, $1) => UIEquipmentCellContentConfiguration.plain)
		)}}`, reviver
	)
}
else if (text.includes('consumables')) {
	object = JSON.parse(
		`{"consumables":${JSON.stringify(
			Array.from(Array(0xff), ($0, $1) => UIConsumableCellContentConfiguration.plain)
		)}}`, reviver
	)
}
else if (text.includes('posts')) {
	object = JSON.parse(
		`{"posts":${JSON.stringify(
			Array.from(Array(0xff), ($0, $1) => ({
				text: `"Пример названия должности ${_()}`, secondaryText: `"ример описания должности ${_()}`,isHidden: Boolean(Math.round(Math.random())),employee_count: Math.round(Math.random() * 0x255)
			}))
		)}}`, reviver
	)
}
else if (text.includes('user')) {
	object = JSON.parse(
		`{"user":${JSON.stringify(new User({ savedName: '', savedPassword: '' }))}}`, reviver
	)
}
else if (typeof text.match(/\/.json$/) === null) return
		else object = JSON.parse(text, reviver)

		this.#observers.forEach(observer => observer.handle_object(object))
		return object
	}

	// MARK:- `UIApplicationObserver`

	handle_object(object) {
		/** @type {Date|undefined} */
		const launchDate = object.dateTime
		if (typeof launchDate === 'undefined') return

		try {
			UIApplication.shared.viewController = new UIViewController(launchDate)
		}
		catch (error) {
			alert(error)
		}
		finally {
			UIApplication.shared.detachObserver(UIApplication.shared)
		}
	}
}

export const crud_for_a_x = UIApplication.shared
