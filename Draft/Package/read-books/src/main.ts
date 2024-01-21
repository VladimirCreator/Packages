import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './component/App'
import './index.css'

const main: HTMLElement|null = document.querySelector('main#root')
const root = main ? ReactDOM.createRoot(main) : undefined

root?.render(
	React.createElement(
		React.StrictMode, null,
		React.createElement(App)
	)
)
