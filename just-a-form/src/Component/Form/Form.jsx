import { useRef, useState } from 'react'
import './Form.css'

import * as Rule from '../../rules'

const initialInput = {
	firstName: '', lastName: '',
	birthday: '',
	email: '',
	password: '', passwordConfirmation: ''
}

export const Form = props => {
	const hasProblem = useRef(false)
	const formRef = useRef(null)
	const [input, setInput] = useState(initialInput)

	const hasEmptyProperty = Object.values(input).some(property => !property.length)

	const handleFormChange = event => {
		event.target.setCustomValidity('')

		const input = { ...input,
			[event.target.id]: event.target.value
		}
		setInput(input)
	}

	const handleInputChange = event => {
		const map = {
			firstName:0, lastName:1,
			birthday:2,
			email:3,
			password:4, passwordConfirmation:5
		}

		Rule[map[event.target.id]].forEach(
			object => object.rule(event.target.value) ? formRef.current.setCustomValidity(object.description) : undefined
		)
	}

	const handleSubmit = event => { event.preventDefault()
		const form = formRef.current
		if (hasProblem.current) {
			form.noValidate = false
			form.reportValidity()
		}
		else
			form.submit()
	}

	return (
		<form ref={formRef} onChange={handleFormChange} {...props}>
			<fieldset>
				<input id='firstName' name='firstName' placeholder='Имя' onChange={handleInputChange} type='text' inputmode='text' />
				<input id='lastName' name='lastName' placeholder='Фамилия' onChange={handleInputChange} type='text' inputmode='text' />
			</fieldset>
			<fieldset>
				<input id='birthday' name='birthday' placeholder='Дата рождения' onChange={handleInputChange} type='text' onblur='if(!this.value){this.type = `text`}' onfocus='this.type=`date`' />
			</fieldset>
			<fieldset>
				<input id='email' name='email' placeholder='Электронная почта' onChange={handleInputChange} type='email' inputmode='email' />
			</fieldset>
			<fieldset>
				<input id='password' name='password' placeholder='Пароль' onChange={handleInputChange} type='password' />
				<input id='passwordConfirmation' name='passwordConfirmation' placeholder='Подтвердите пароль' onChange={handleInputChange} type='password' />
			</fieldset>
			<button id='sendForm' onChange={handleInputChange} type='submit' disabled={hasEmptyProperty} onSubmit={handleSubmit}>
				Отправить
			</button>
		</form>
	)
}
