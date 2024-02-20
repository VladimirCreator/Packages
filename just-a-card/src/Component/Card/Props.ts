type IHaveProblemsWithNaming = {
	color: string; src: string
}

type Card = {
	price: number
	title: string; description: string
	variants: IHaveProblemsWithNaming[]
}

export type Props = Readonly<Card>
