import { Section } from './UI'
import { Card, CardHeader, CardContent } from './UI'

type Props = {
	education: any[]
}

export const EducationSection: React.FC<Props> = props => {
	const { education } = props

	const listOfEducation = education.map(
		(education: any) => {
			const { school, start, end, degree } = education
			return (
				<Card key={school}>
					<CardHeader>
						<div className='text-base flex items-center justify-between gap-x-2'>
							<h3 className='font-semibold leading-none' children={school} />
							<div className='text-sm text-gray-500 tabular-nums'>
								{start} - {end}
							</div>
						</div>
					</CardHeader>
					<CardContent className='mt-2' children={degree} />
				</Card>
			)
		}
	)
	return (
		<Section>
			<h2 className='font-bold text-xl'>
				Education
			</h2>
			{listOfEducation}
		</Section>
	)
}
