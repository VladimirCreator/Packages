import { UIApplication } from './UIApplication.mjs'

const onDOMContentLoaded = () => {
	UIApplication.shared.attachObserver(UIApplication.shared)
}

const onLoad = () => {
	/** @param {MessageEvent} event */
	const onMessageEvent = (event) => {
		UIApplication.shared.parse(event.data)
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
