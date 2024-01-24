import { useRef, useState } from 'react'

import './Form.css'
import * as Rule from '../../rules.mjs'
import { useRules } from './Form.hooks'

const initialInput = {
	firstName: '', lastName: '',
	birthday: '',
	email: '',
	password: '', passwordConfirmation: ''
}

export const Form = props => {
	const formRef = useRef(null)

	const [finalInput, setInput] = useState(initialInput)

	const firstNameHasProblem = useRules(finalInput.firstName, ...Rule.rulesForFirstName)
	const lastNameHasProblem = useRules(finalInput.lastName, ...Rule.rulesForLastName)
	const birthdayHasProblem = useRules(finalInput.birthday, ...Rule.rulesForBirthday)
	const emailHasProblem = useRules(finalInput.email, ...Rule.rulesForEmail)
	const passwordHasProblem = useRules(finalInput.password, ...Rule.rulesForPassword)
	const passwordConfirmationHasProblem = useRules(finalInput.passwordConfirmation, ...Rule.rulesForPasswordConfirmation)

	const hasEmptyProperty = Object.values(finalInput).some(property => property.length === 0)

	const handleFormChange = event => { const { target } = event
		target.setCustomValidity('')

		const updatedInput = { ...finalInput,
			[target.id]: target.value
		}
		setInput(updatedInput)
	}

	const handleSubmit = event => { event.preventDefault()
		const form = formRef.current

		const hasProblem = [
			firstNameHasProblem, lastNameHasProblem,
			birthdayHasProblem,
			emailHasProblem,
			passwordHasProblem, passwordConfirmationHasProblem
		].some(value => value)
		if (hasProblem) {
			form.noValidate = false
			form.reportValidity()
		}
		else
			form.submit()
	}

	return (
		<form ref={formRef} onChange={handleFormChange} {...props}>
			<fieldset>
				<input id='firstName' children={input.firstName} name='firstName' placeholder='Имя' type='text' inputmode='text' />
				<input id='lastName' children={input.lastName} name='lastName' placeholder='Фамилия' type='text' inputmode='text' />
			</fieldset>
			<fieldset>
				<input id='birthday' children={input.birthday} name='birthday' placeholder='Дата рождения' type='text' onblur='if(!this.value){this.type = `text`}' onfocus='this.type=`date`' />
			</fieldset>
			<fieldset>
				<input id='email' children={input.email} name='email' placeholder='Электронная почта' type='email' inputmode='email' />
			</fieldset>
			<fieldset>
				<input id='password' children={input.password} name='password' placeholder='Пароль' type='password' />
				<input id='passwordConfirmation' children={input.passwordConfirmation} name='passwordConfirmation' placeholder='Подтвердите пароль' type='password' />
			</fieldset>
			<button id='sendForm' type='submit' disabled={hasEmptyProperty} onSubmit={handleSubmit}>
				Отправить
			</button>
		</form>
	)
}
