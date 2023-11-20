const url = 'http://checkstatus.website:8099/'
const init = {
	method: 'POST',
	headers: { 'Content-Type': 'application/json;charset=utf-8' }
}

class Application {

	// MARK: Properties

	applications = []
	#observers = []

	// MARK: Constructors

	constructor(flag = true) {
		if (flag) throw new Error()
	}

	// MARK: Methods

	attachObserver(observer) { this.#observers.push(observer) }
	detachObserver(observer) { this.#observers = this.#observers.filter(candidate => candidate !== observer) }
	notifyObservers(object) { this.#observers.forEach(observer => observer.applicationDidFetch(object)) }

	async download() {
		const init = { ...init,
			body: '""'
		}
		const response = await fetch(url.concat("/Face/App_List/"), init)
		const data = response.json()

		const applications = []

		let index = 0
		for (const value of Object.values(data)[index]) {
			const application = {}

			for (const key of Object.keys(data)) {
				application[key] = data[key][index]
			}

			applications.push(new Application(application))
			index += 1
		}

		this.applications = applications
		this.notifyObservers(this.applications)
	}

	async upload(application) {
		const body = JSON.stringify(application)
		const init = { ...init,
			headers: { ...init.headers,
				'Content-Length': body.length
			}, body
		}

		const response = await fetch(url.concat("/Face/New_app"), init)
		const object = await response.json()
		this.notifyObservers(object)

		if (object.error === 0 || object.error === "0") {
			this.applications.push(application); this.notifyObservers(this.applications)
		}
	}

	async update(application) {
		const body = JSON.stringify(application)
		const init = { ...init,
			headers: { ...init.headers,
				'Content-Length': body.length
			}, body
		}

		const response = await fetch(url.concat("/Face/Update_app"), init)
		const object = await response.json()

		this.notifyObservers(object)
		this.applications = this.applications.map(candidate => candidate.app_id !== application.app_id ? candidate : application)
		this.notifyObservers(this.applications)
	}

	/* MARK: ... */
	static #shared = undefined
	static get shared() {
		const hasInstance = typeof Application.#shared !== "undefined"

		if (!hasInstance) UIApplication.#shared = new UIApplication(false)
		return UIApplication.#shared
	}
}
