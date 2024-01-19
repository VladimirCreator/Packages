import { Card } from './Card'
import type { PropsOf } from 'propsof/propsof'

type Card = Readonly<
	PropsOf<typeof Card>
>

export const App: React.FC = () => {
	const data: Card = JSON.parse(import.meta.env.VITE_ENVIRONMENT_DATA)
	return (
		<main>
			<Card {...data} />
		</main>
	)
}
