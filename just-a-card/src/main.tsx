import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import { App } from './Component/App'

const article: HTMLElement = document.querySelector('article#root')!
const root = ReactDOM.createRoot(article)

root.render(<React.StrictMode children={ <App /> } />)
