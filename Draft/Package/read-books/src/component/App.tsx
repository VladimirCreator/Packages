import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { PropsOf } from 'propsof/propsof'

import './App.css'
import { Collection } from './Collection'

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
