import { Card } from './Card'
import type { PropsOf } from 'propsof/propsof'

type Card = Readonly<
	PropsOf<typeof Card>
>

export const App: React.FC = () => {
	const data: Card = true ? {
		price: 999, title: 'The Swift Programming Language', description: 'Swift is a new programming language for iOS, macOS, watchOS, and tvOS app development.',
		variants: [
			{
				src: 'https://raw.githubusercontent.com/apple/swift-org-website/main/assets/images/swift.svg', color: '#FF0000'
			},
			{
				src: 'https://raw.githubusercontent.com/apple/swift-org-website/main/assets/images/swift.svg', color: '#00FF00'
			}
		]
	} : JSON.parse(import.meta.env.VITE_ENVIRONMENT_DATA)
	return (
		<Card {...data} />
	)
}
