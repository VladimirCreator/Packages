import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' /* @VladimirCreator added this at 2:28 AM on Mon 22 Jan 2024. */

import { App } from './component/App'
import { Error } from './component/Error'
import './index.css'

const router = createBrowserRouter([
	{
		path: '/Packages/read-books/', // 🤮
		element: React.createElement(App),
		errorElement: React.createElement(Error)
	}
])

const main: HTMLElement|null = document.querySelector('main#root')
const root = main ? ReactDOM.createRoot(main) : undefined

root?.render(
	React.createElement(
		React.StrictMode, null,
		React.createElement(
			RouterProvider, { router }
		)
	)
)
