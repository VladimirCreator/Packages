import './css/main.css'
import './css/entrypoint.css'

import { c } from './mvc'

const compareIfEnter = event =>
	event.keyCode === 13 ?
		c.compare() :
		(()=>{})()

window.addEventListener('keydown', compareIfEnter)
