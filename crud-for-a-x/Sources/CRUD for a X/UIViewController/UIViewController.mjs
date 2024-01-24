import { User } from '../User'
import { crud_for_a_x } from '../UIApplication'
import { UIView } from '../UIView/UIView'
import { UITableViewController, UIToolbarViewController, UITreeViewController, UIWelcomeViewController } from '.'

/** @implements {UIApplicationObserver} */
export class UIViewController {
	#view

	#welcomeViewController = new UIWelcomeViewController()
	#treeViewController = new UITreeViewController()
	#tableViewController = new UITableViewController()
	#toolbarViewController = new UIToolbarViewController()

  /** @param {Date} launchDate */
	constructor(launchDate) {
		if(!navigator.onLine) throw new Error('Требуется активное интернет-соединение.')

		const isLaunchDateInstanceOfDate = launchDate instanceof Date
		if (!isLaunchDateInstanceOfDate) return

		const finalDate = new Date(2023, 7)
		if (launchDate >= finalDate) throw new Error('Срок лицензии на использование программного обеспечения истёк.')

		crud_for_a_x.attachObserver(this)
		crud_for_a_x.attachObserver(this.#tableViewController)
		crud_for_a_x.attachObserver(this.#toolbarViewController)
		// this.#treeViewController.handler =
		this.#toolbarViewController.delegate = this.#tableViewController

		window.postMessage('GET https://api.application.com/files/user.json')
	}

	handle_object(object) {
		const user = object.user
		if (!(user instanceof User)) {
			/*return*/
		}
		if (
			typeof user === 'undefined' ||
			typeof user.savedName === 'undefined' ||
			typeof user.savedPassword === 'undefined'
		) {
			return
		}
		const { savedName, savedPassword } = user

		if (typeof savedName !== 'string' || typeof savedPassword !== 'string') {
			this.#welcomeViewController.welcomeHandler = (name, password) => {
				/*window.postMessage('POST https://api.application.com/files/user.json'.concat(' | ').concat(JSON.stringify({user:new User({savedName:name,savedPassword:password})})));*/
			}
			this.#view = new UIView()
			return
		}
		this.#welcomeViewController.welcomeHandler = (name, password) => {
			if (name !== savedName || password !== savedPassword) {
				return
			} else {
				this.#view = new UIView()
			}
		}
		crud_for_a_x.detachObserver(this)
	}
}
