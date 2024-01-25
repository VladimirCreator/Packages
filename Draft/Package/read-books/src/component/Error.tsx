import { useRouteError } from 'react-router-dom'

export const Error: React.FC = () => {
	const error = useRouteError()
	return (
		<>
			<h1>😔</h1>
			<p>{/* @ts-expect-error */
				error.message
			}</p>
		</>
	)
}
