import { useState, useEffect } from 'react'

/**
	* @param {T} value
	* @param {(param: T) => boolean} rule
	* @returns {boolean} Returns a boolean value which indicates if `value` violates `rule`. `true` if a rule is violated and `false` if it is not
*/
export function useRule(value, rule) {
	const isViolated = useRules(value, rule)
	return isViolated
}

export function useRules(value, ...rules) {
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
