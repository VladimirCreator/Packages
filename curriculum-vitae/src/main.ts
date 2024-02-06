import React from 'react'
import ReactDOM from 'react-dom/client'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import './index.css'
import { App } from './App'

import translationn from './translation.json'

i18next
	.use(initReactI18next)
	.init({
		lng: 'ru', fallbackLng: 'en',
		resources: translationn
	})

const div = document.querySelector('div#root') as HTMLDivElement
const root = ReactDOM.createRoot(div)

root.render(
	React.createElement(
		React.StrictMode, null,
		React.createElement(App)
	)
)
