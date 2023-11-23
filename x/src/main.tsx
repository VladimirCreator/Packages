import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './main.css'
import { App } from './App'
import { store } from './Redux/'

const article: HTMLElement = document.querySelector('article#root')!
const root = ReactDOM.createRoot(article)

root.render(
	<React.StrictMode children={
			<Provider store={store} children={ <App /> } />
		}
	/>
)
