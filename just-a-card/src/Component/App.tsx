import './App.scss'
import { Card } from './Card/'

export const App: React.FC = () => (
	<main>
		<Card price={100} title='Zebronic head phone' description='A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.'
			colors={['#E44', '#3C81F6', '#000`']}
			imgHref='https://developer.apple.com/tutorials/img/apple-logo.56c5ba00.svg'
		/>
	</main>
)
