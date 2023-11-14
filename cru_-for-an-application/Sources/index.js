import '../styles.scss'

import * as bootstrap from 'bootstrap'
import { UIViewController } from './UIViewController'

window.addEventListener('load', UIViewController.shared)
window.addEventListener('load', UIViewController.shared.loadView.bind(UIViewController.shared))
