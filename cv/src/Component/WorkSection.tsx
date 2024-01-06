/* Initially Modified at 11:43 PM on Sat 6 Jan 2024
        Last Modified at 11:52 PM on Sat 6 Jan 2024
*/
import { Section } from './UI/Section' // 11:43 PM Sat 6 Jan 2024
import { Card, CardContent, CardHeader } from './UI/Card' // 11:44 PM Sat 6 Jan 2024
import { Badge } from './UI/Badge' // 11:44 PM Sat 6 Jan 2024

type Props = {
	work: any[]
}

export const WorkSection: React.FC<Props> = props => {
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
	const listOfWork = work.map(
		(work: any) => (
			<Card key={work.company}>
				<CardHeader>
					<div className='text-base flex items-center justify-between gap-x-2'>
						<h3 className='inline-flex items-center justify-center gap-x-1 font-semibold leading-none'>
							<a className='hover:underline' href={work.link} children={work.company} />
							<span className='inline-flex gap-x-1' children={listOfBadges} />
						</h3>
						<div className='text-sm text-gray-500 tabular-nums'>
							{work.start} - {work.end}
						</div>
					</div>
					<h4 className='font-mono text-sm leading-none' children={work.title} />
				</CardHeader>
				<CardContent className='text-xs mt-2' children={work.description} />
			</Card>
		)
	)
	return (
		<Section>
			<h2 className='font-bold text-xl'>Work Experience</h2>
			{listOfWork}
		</Section>
	)
}

