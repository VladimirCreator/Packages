import './bootstrap.scss'

import * as bootstrap from 'bootstrap'
import { ViewController } from './Controller/ViewController'

window.addEventListener('load', ViewController.shared)
window.addEventListener('load', ViewController.shared.loadView.bind(ViewController.shared))
