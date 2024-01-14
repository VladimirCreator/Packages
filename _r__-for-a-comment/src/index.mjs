import React from 'react'
import ReactDom from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'
import { App } from './Component/'
import { store } from './Redux/'

const main = document.querySelector('main#root')
const root = ReactDOM.createRoot(main)

root.render(
	React.createElement(
		React.StrictMode, null,
		React.createElement(
			Provider, { store },
			React.createElement(App)
		)
	)
)
