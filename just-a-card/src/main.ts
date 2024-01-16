import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import { App } from './Component/App'

const article = document.querySelector('article#root') as HTMLElement
const root = ReactDOM.createRoot(article)

root.render(
	React.createElement(
		React.StrictMode, null,
		React.createElement(App)
	)
)
