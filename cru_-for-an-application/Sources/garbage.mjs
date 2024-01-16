export const form = {
	modal: document.querySelector("div#applicationForm.modal"),

	show(application) {
		if (typeof application === "undefined") this.state = form_new
		else this.state = form_edit
	}
}

export const form_new = {}
export const form_edit = {}

export const view = {
	delegate: undefined,

	table: document.querySelector("table.table"),
	modal: document.querySelector("div#applicationForm.modal")
}

