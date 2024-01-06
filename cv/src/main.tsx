import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'
import './index.css'

const div = document.querySelector('div#root') as HTMLDivElement
const root = ReactDOM.createRoot(div)

root.render(
	<React.StrictMode children={<App />} />
)
