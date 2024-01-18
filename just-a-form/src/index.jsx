import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css'

import { App } from './Component/App'

const article = document.querySelector('article#root')
const root = ReactDOM.createRoot(article)

root.render(
	<React.StrictMode children={ <App /> } />
)
