import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'
import { App } from './Component/App'
import { store } from './redux/store'

const section = document.querySelector("section#root")
const root = ReactDOM.createRoot(section)

root.render(
	<React.StrictMode children={
			<Provider store={store} children={<App />} />
		}
	/>
)
