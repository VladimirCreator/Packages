/* Initially Modified at 11:34 PM on Sat 6 Jan 2024.
        Last Modified at 11:40 PM on Sat 6 Jan 2024.
*/
import { Section } from './UI/Section' // 11:35 PM Sat 6 Jan 2024
import { Card, CardHeader, CardContent } from './UI/Card' // 11:35 PM...11:36 PM Sat 6 Jan 2024

type Props = {
	education: any[]
}

export const EducationSection: React.FC<Props> = props => {
	const { education } = props

	const listOfEducation = education.map(
		(education: any) => (
			<Card key={education.school}>
			<CardHeader>
				<div className='text-base flex items-center justify-between gap-x-2'>
					<h3 className='font-semibold leading-none' children={education.school} />
					<div className='text-sm text-gray-500 tabular-nums'>
						{education.start} - {education.end}
					</div>
				</div>
			</CardHeader>
			<CardContent className='mt-2'
				children={education.degree}
			/>
			</Card>
		)
	)
	return (
		<Section>
			<h2 className='font-bold text-xl'>Education</h2>
			{listOfEducation}
		</Section>
	)
}
