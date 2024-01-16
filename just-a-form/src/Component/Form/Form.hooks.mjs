/* @VladimirCreator created this file at 1:48 AM on Wed 17 Jan 2024.
   @VladimirCreator modified this file at 2:00 AM on Wed 17 Jan 2024 last time.
*/
import { useState, useEffect } from 'react' // 1:53 AM Wed 17 Jan 2024 for useEffect and 1:55 AM Wed 17 Jan 2024 for useState

/**
	* @param {T} value
	* @param {(param: T) => boolean} rule
	* @returns {boolean} Returns a boolean value which indicates if `value` violates `rule`. `true` if a rule is violated and `false` if it is not
*/
export function useRule(value, rule) {
	const isViolated = useRules(value, rule)
	return isViolated
}

export function useRules(value, ...rules) { // 2:16 PM...2:21 PM Wed 17 Jan 2024
	const [isViolated, setIsViolated] = useState(false)

	const synchronize = () => {
		const isObeyed = rules.map(rule => rule(value))

		if (isObeyed.every(value => value)) {
			setIsViolated(false)
			return
		}
		setIsViolated(true)
	}

	useEffect(synchronize, [value])
	return isViolated
}
