import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './components/App/App'
import store from './redux/store'

import './index.css'

const root = ReactDOM.createRoot(document.querySelector("section#root"))
root.render(
	<StrictMode children={
			<Provider store={store} children={<App />} />
		}
	/>
)
