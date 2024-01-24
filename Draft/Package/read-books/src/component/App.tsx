/* @VladimirCreator modified this file at 11:24 PM on Sun 21 Jan 2024 last time.
*/
import { useEffect /* @VladimirCreator added this on 9:19 PM on Sun 21 Jan 2024 */ } from 'react' /* @VladimirCreator added this on 9:17 PM on Sun 21 Jan 2024 (Got rid of it at 11:14 PM was `useState`) */
import { useSearchParams } from 'react-router-dom' /* @VladimirCreator added this on 11:13 PM on Sun 21 Jan 2024 */
import type { PropsOf } from 'propsof/propsof' /* @VladimirCreator added this on 2:20 AM on Sun 21 Jan 2024 */

import './App.css'
import { Collection } from './Collection' // 8:59 PM Sat 20 Jan 2024

type Data = Readonly<
	PropsOf<typeof Collection>
>
type Topic = Data['topic']

const data: Record<Topic, Omit<Data, 'topic'>> = JSON.parse(import.meta.env.VITE_ENVIRONMENT_DATA)
const topics = Object.keys(data) as Topic[]

export const App: React.FC = () => {
	const [searchParams] = useSearchParams()
	const topic = searchParams.get('topic') as Topic

	const onKeydown = (event: KeyboardEvent) => {
		const { code } = event
		const indexOfTopic = topics.indexOf(topic)

		if (code.toLowerCase().includes('arrowright')) {
			searchParams.set('topic', topics[indexOfTopic+1])
		}
		if (code.toLowerCase().includes('arrowleft')) {
			searchParams.set('topic', topics[indexOfTopic-1])
		}
	}

	useEffect(
		() => {
			window.addEventListener('keydown', onKeydown)
			return () => {
				window.removeEventListener('keydown', onKeydown)
			}
		}, []
	)

	return (
		<Collection topic={topic} {...data[topic]} />
	)
}
