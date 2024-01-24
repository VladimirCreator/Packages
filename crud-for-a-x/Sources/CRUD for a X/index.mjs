import './index.scss'
import { crud_for_a_x } from './UIApplication'

const onDOMContentLoaded = () => {
	crud_for_a_x.attachObserver(crud_for_a_x)
}

const onLoad = () => {
	/** @param {MessageEvent<string} event */
	const onMessageEvent = (event) => {
		crud_for_a_x.parse(event.data)
	}

	if (true) {
		window.addEventListener('message', onMessageEvent)
		window.postMessage(`{"dateTime":"2020-12-31T19:00:00.000Z"}`)
	} else {
		chrome.webview.addEventListener('message', message)
		chrome.webview.postMessage('GET https://www.timeapi.io/Time/current/zone?timeZone=Asia/Yekaterinburg')
	}
}

window.addEventListener('DOMContentLoaded', onDOMContentLoaded)
window.addEventListener('load', onLoad)
