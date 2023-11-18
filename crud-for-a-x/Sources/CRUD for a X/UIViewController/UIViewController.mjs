import { UIView } from '../UIView/UIView.mjs'
import { UITableViewController } from './UITableViewController.mjs'
import { UIToolbarViewController } from './UIToolbarViewController.mjs'
import { UITreeViewController } from './UITreeViewController.mjs'
import { UIWelcomeViewController } from './UIWelcomeViewController.mjs'

/** @implements {UIApplicationObserver} */
export class UIViewController {
	#view

	#welcomeViewController = new UIWelcomeViewController()
	#treeViewController = new UITreeViewController()
	#tableViewController = new UITableViewController()
	#toolbarViewController = new UIToolbarViewController()

  /** @param {Date} date */
	constructor(date) {
		if (!navigator.onLine) {
			throw new Error('Требуется активное интернет-соединение.')
		}
		if (date instanceof Date) {
			const finalDate = new Date(0b011111100111, 0b00000000_00000111)
			if (date >= finalDate) {
				throw new Error('Срок лицензии на использование программного обеспечения истёк.')
			}
			UIApplication.shared.attachObserver(this)
			UIApplication.shared.attachObserver(this.#tableViewController)
			UIApplication.shared.attachObserver(this.#toolbarViewController)
			this.#toolbarViewController.delegate = this.#tableViewController

			window.postMessage('GET https://api.application.com/files/user.json')
		}
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
		UIApplication.shared.detachObserver(this)
	}
}
