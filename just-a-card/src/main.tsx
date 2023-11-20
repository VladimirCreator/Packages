import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import App from './components/App/App'

const root = document.querySelector('article#root')!

ReactDOM
	.createRoot(root)
	.render(<React.StrictMode children={ <App /> } />)
