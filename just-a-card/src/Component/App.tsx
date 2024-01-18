import { Card } from './Card'

type Card = Readonly<
	Parameters<typeof Card>['0']
>

export const App: React.FC = () => {
	const props: Card = JSON.parse(import.meta.env.VITE_ENVIRONMENT_DATA)
	return (
		<main>
			<Card {...props} />
		</main>
	)
}
