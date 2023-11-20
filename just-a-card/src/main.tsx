import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import App from './components/App/App'

ReactDOM
  .createRoot(
    document.querySelector('article#root')!
  )
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
