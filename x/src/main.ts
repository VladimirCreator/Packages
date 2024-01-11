import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import './main.css'
import { App } from './App'
import { store } from './Redux/'

const main = document.querySelector('main#root') as HTMLElement|undefined
const root = main ? ReactDOM.createRoot(main) : undefined

root?.render(
	React.createElement(
		React.StrictMode, null,
		React.createElement(
			Provider, { store, children: React.createElement(App) }
		)
	)
)
