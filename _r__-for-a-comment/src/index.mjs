import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'
import { App } from './Component/'
import { store } from './Redux/'

const main = document.querySelector('main#root')
const root = createRoot(main)

const app = React.createElement(App)
const provider = React.createElement(Provider, { store },  app)
const strictMode = React.createElement(StrictMode, null, provider)

root.render(strictMode)
