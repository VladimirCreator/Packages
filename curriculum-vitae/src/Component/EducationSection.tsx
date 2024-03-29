import { useTranslation } from 'react-i18next'

import { Card, CardHeader, CardContent } from '../Legacy'
import { Section } from '../Legacy'

type Props = {
	education: any[]
}

const List: React.FC<Props> = props => {
	const { education } = props
	return education.map(
		(education: any) => {
			const { school, start, end, degree } = education
			return (
				<Card key={school}>
					<CardHeader>
						<div className='text-base
							flex justify-between items-start
							gap-x-2
						'
						>
							<h3 className='font-semibold leading-none'>
								{school}
							</h3>
							<div className='text-sm text-gray-500 tabular-nums'>
								{start}&nbsp;-&nbsp;{end}
							</div>
						</div>
					</CardHeader>
					<CardContent className='mt-2' children={degree} />
				</Card>
			)
		}
	)
}

export const EducationSection: React.FC<Props> = props => {
	const { education } = props
	const { t } = useTranslation()
	return (
		<Section>
			<h2 className='font-bold text-xl'>{t('education')}</h2>
			<List education={education} />
		</Section>
	)
}
