/**
	@callback UIWelcomeViewControllerHandler
		@param {string} name
		@param {string} password
		@returns {void}
*/
export class UIWelcomeViewController {
	get dialog() {
		const dialog = document.querySelector("dialog")
		if (dialog instanceof HTMLDialogElement) return dialog; else throw new Error()
	}

	/** @param {UIWelcomeViewControllerHandler} callback */
	set welcomeHandler(callback) {
		const name = window.prompt("Логин: (просто Enter)") ?? ""
		const password = window.prompt("Пароль: (просто Enter)") ?? ""
		callback(name, password)
	}
}
