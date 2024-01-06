class UIFormViewController {

	// MARK: Properties

	state = new AddFormState();

	form = document.querySelector("form.vstack")
	modal = new bootstrap.Modal(document.querySelector("div#applicationForm.modal"))

	// MARK: Constructors

	constructor(flag = true) {
		if (flag) throw new Error()
		this.loadView()
	}

	// MARK: Methods

	loadView() { document.querySelector("div.modal-footer").append(this.saveButton) }

	present(dataSource = new Application()) {
		this.form.innerHTML = ""

		dataSource["error"] = ""

		for (const key in dataSource) {
			const div = document.createElement("div")
			const label = document.createElement("label")
			const input = document.createElement("input")

			label.className = "form-label"
			label.htmlFor = key
			label.innerText = key

			input.id = key; input.className = "form-control"
			input.type = "text"
			input.value = dataSource[key] ?? ""

			this.state.div(div, label, input)

			div.append(label); div.append(input)
			this.form.append(div)
		}
		this.modal.show()
	}

	dismiss() { this.modal.hide() }

	error(message) {
		const errorInput = this.form.querySelector("input#error")
		if (!errorInput) return; else errorInput.value = this.state.message
	}

	applicationDidFetch(object) {
		switch (object.error) {
		case 0: case '0':
			UIFormViewController.shared.dismiss()
			return
		default:
			UIFormViewController.shared.error(this.state.message)
		}
	}

	saveButtonDidClick() { this.state.fetch(this.application) }

	// MARK: Getters

	get application() {
		const application = new Application()
		for (const key in application) {
			application[key] = document.querySelector("input#".concat(key)).value
		}

		return new Application(application)
	}

	get saveButton() {
		const button = document.createElement("button")
		button.id = "saveButton"; button.className = "btn btn-primary"
		button.type = "button"
		button.innerText = "Сохранить"
		button.addEventListener("click", event => this.saveButtonDidClick(event))

		return button
	}

	// MARK: ...

	/** @type {UIFormViewController|undefined} */
	static #shared = undefined
	static get shared() {
		if (typeof UIFormViewController.#shared === "undefined") {
			UIFormViewController.#shared = new UIFormViewController(false)
		}
		return UIFormViewController.#shared
	}
}

class FormState {
	div(div, label, input) {
		if (input.id !== "error") { return }
		input.className = "form-control-plaintext"
		input.setAttribute("disabled", "")
		input.value = ""
	}
}

class AddFormState extends FormState {
	fetch(application) { UIApplication.shared.upload(application) }

	div(div, label, input) { super.div(div, label, input) }

	get title() { return "Новое приложение" }
	get message() { return "Приложение с указанным app_id уже существует." }
}

class UpdateFormState extends FormState {
	fetch(application) { UIApplication.shared.update(application) }

	div(div, label, input) {
		super.div(div, label, input)
		if (input.id === "app_id") input.setAttribute("disabled", "")
	}

	get title() { return "Редактирование приложения" }
	get message() { return "Приложение с указанным app_id не существует." }
}
