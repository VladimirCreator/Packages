/* @VladimirCreator created this file  at 2:53 AM...2:57 AM on Mon 22 Jan 2024.
   @VladimirCreator modified this file at 2:57 AM on Mon 22 Jan 2024 last time.
*/
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
