export class Translator {
	/** @type {Translator|undefined} */
	static #shared = undefined
	static get shared() {
		if (typeof Translator.#shared === 'undefined') {
			Translator.#shared = new Translator(false)
		}
		return Translator.#shared
	}

	constructor(flag = true) {
		if(flag) throw new Error()
	}

	/**
		@param {string} word
		@returns {void}
	*/
	translate(word) { return Translator.dictionary.get(word) ?? '' }

	// MARK:- Garbage

	static get UITreeView() {
		const dictionary = [
			['branches','Филиалы'],
			['rooms','Помещения'],
			['warehouses','Склады'],
			['departments','Отделы'],
			['employees','Сотрудники'],
			['equipment','Оборудование'],
			['consumables','Расходные материалы'],
			['posts','Должности']
		]
		return new Map(dictionary)
	}

	static get UITableView() {
		const dictionary = [
			['text','Название'],['secondaryText','Описание'],['isHidden','Скрыто'],
			['address','Адрес'],
			['branch','Филиал'],
			['responsible','Ответственный'],
			['employee_count','Сотрудников'],
			['equipment_count','Оборудования'],
			['firstname','Имя'],['lastname','Фамилия'],['patronymic','Отчество'],
			['post','Должность'],
			['department','Отдел'],
			['room','Помещение'],
			['phone','Номер телефона'],
			['equipment_type','Тип оборудования'],
			['type_of_printing','Тип печати'],
			['manufacturer','Производитель'],
			['model','Модель'],
			['формат','Формат'],
			['price','Цена'],
			['serial_number','Серийный номер'],
			['inventory_number','Инвентаризационный номер'],
			['type_of_consumable','Тип расходного материала'],
			['color','Цвет'],
			['compatibility_local','Совместимость (локальная)'],['compatibility_global','Совместимость (глобальная)'],
			['code_of_model','Код модели'],
			['resource','Ресурс'],
			['reserve','Запас']
		]
		return new Map(dictionary)
	}

	static get dictionary() {
		const dictionary = [...Translator.UITreeView,...Translator.UITableView]
		return new Map(dictionary)
	}
}
