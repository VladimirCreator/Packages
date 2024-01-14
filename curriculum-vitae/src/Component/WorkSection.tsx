import { Badge } from './UI'
import { Card, CardContent, CardHeader } from './UI'
import { Section } from './UI'

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
								{start} - {end}
							</div>
						</div>
						<h4 className='font-mono text-sm leading-none' children={title} />
					</CardHeader>
					<CardContent className='text-xs mt-2' children={description} />
				</Card>
			)
		}
	)
	return (
		<Section>
			<h2 className='font-bold text-xl'>
				Work Experience
			</h2>
			{listOfWork}
		</Section>
	)
}

