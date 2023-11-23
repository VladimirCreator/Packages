import './css/main.css'
import './css/entrypoint.css'

import { view } from './mvc/entrypoint/view'
import { c } from './mvc/'

const handleKeyDown = (event) => event.keyCode === 13 ? c.compare() : (()=>{})()
window.addEventListener('keydown', handleKeyDown)
