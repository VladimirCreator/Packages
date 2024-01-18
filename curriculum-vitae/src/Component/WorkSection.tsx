import { Badge } from '../Legacy'
import { Card, CardContent, CardHeader } from '../Legacy'
import { Section } from '../Legacy'

type Props = {
	work?: any[]
}

const List: React.FC<Required<Props>> = props => { // 4:05 PM Thu 18 Jan 2024
	const { work } = props

	const listOfBadges = work.map(
		(work: any) => (
			work.badges.map(
				(badge: any) => (
					<Badge key={badge} className='text-xs align-middle' children={badge}
						variant='secondary'
					/>
				)
			)
		)
	)
	return work.map(
		(work: any) => {
			const { company, link, start, end, title, description } = work
			return (
				<Card key={company}>
					<CardHeader>
						<div className='text-base flex items-center justify-between gap-x-2'>
							<h3 className='inline-flex items-center justify-center gap-x-1 font-semibold leading-none'>
								<a className='hover:underline' href={link} children={company} />
								<span className='inline-flex gap-x-1' children={listOfBadges} />
							</h3>
							<div className='text-sm text-gray-500 tabular-nums'>
								{start}&nbsp;-&nbsp;{end}
							</div>
						</div>
						<h4 className='font-mono text-sm leading-none'>
							{title}
						</h4>
					</CardHeader>
					<CardContent className='text-xs mt-2' children={description} />
				</Card>
			)
		}
	)
}

export const WorkSection: React.FC<Props> = props => {
	const { work } = props

	return !work ? null : (
		<Section>
			<h2 className='font-bold text-xl'>Work Experience</h2>
			<List work={work} />
		</Section>
	)
}

