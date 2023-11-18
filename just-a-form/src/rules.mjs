import { isEmpty, isRangeUnderflow, isRangeOverflow, includesDigit, includesLatin, isAdult } from './checkers.mjs'

export const rulesForFirstName = [
	{ rule: isEmpty, description: 'Вам необходимо указать Ваше имя.' },
	{ rule: isRangeOverflow, args: [32], description: 'Имя не может быть длинее 32 символов.' },
	{ rule: includesDigit, description: 'Имя не может содержать цифр.' },
	{ rule: includesLatin, description: 'Имя не может содержать латиницу.' },
	{ rule: (firstName) => firstName.includes(' '), description: 'Имя не может содержать пробелов.' }
]

export const rulesForLastName = [
	{ rule: isEmpty, description: 'Вам необходимо указать Вашу фамилию.' },
	{ rule: isRangeOverflow, args: [32], description: 'Фамилия не может быть длинее 32 символов.' },
	{ rule: includesDigit, description: 'Фамилия не может содержать цифр.' },
	{ rule: includesLatin, description: 'Фамилия не может содержать латиницу.' },
	{ rule: (lastName) => lastName.includes(' '), description: 'Фамилия не может содержать пробелов.' }
]

export const rulesForBirthday = [
	{ rule: (userDate) => !isAdult(userDate), description: 'Возраст регистрации составляет от 18 лет.' }
]

export const rulesForEmail = [
	{ rule: isEmpty, description: 'Вам необходимо указать Вашу электронную почту.' },
	{
		rule: (userEmail) => !userEmail.includes('@'),
		description: 'Электронный адрес должен содержать символ \'@\'.'
	},
	{
		rule: (userEmail) => userEmail.match(/@/g).length !== 1,
		description: 'Электронный адрес должен содержать единственный символ \'@\'.'
	},
	{
		rule: (userEmail) => {
			return userEmail
							.slice(userEmail.lastIndexOf('@') + 1, userEmail.length)
							.length === 0
		},
		description: 'Вам необходимо указать домен после символа \'@\'.'
	}
]

export const rulesForPassword = [
	{ rule: isEmpty, description: 'Вам необходимо указать пароль.' },
	{
		rule: (userPassword) => userPassword !== view.password_confirmation.value,
		description: 'Введённые пароли должны совпадать.'
	},
	{
		rule: isRangeUnderflow,
		args: [8],
		description: 'Минимальная длина пароля составляет 8 символов.'
	},
	{
		rule: (userPassword) => !includesDigit(userPassword),
		description: 'Пароль должен включать в себя минимум 1 цифру.'
	},
	{
		rule: (userPassword) => {
			const matches = userPassword.match(/[a-z]/g)
			if (matches) return false; else return true
		},
		description: 'Пароль должен включать в себя минимум 1 строчную латинскую букву.'
	},
	{
		rule: (userPassword) => {
			const matches = userPassword.match(/[A-Z]/g)
			if (matches) return false; return true
		},
		description: 'Пароль должен включать в себя минимум 1 заглавную латинскую букву.'
	}
]
