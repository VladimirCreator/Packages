import startCase from 'lodash-es/startCase'

import { Badge } from '../Legacy'
import { Card, CardContent, CardHeader } from '../Legacy'
import { Section } from '../Legacy'

type Builder = {
	nextBuilder?: Builder

	createElement: (skills: any[]|any) => any
}

type Props = {
	skills?: any[]|any
}

const buildIfArray: Builder = {
	createElement(skills) {
		const badges = skills.map(
			(skill: any) => (
				<Badge key={skill} children={skill} />
			)
		)
		return (
			<div className='flex flex-wrap gap-1' children={badges} />
		)
	}
}

const buildIfObject: Builder = {
	nextBuilder: buildIfArray,

	createElement(skills) {
		if (Array.isArray(skills)) {
			return this.nextBuilder?.createElement(skills)
		}
		return Object.keys(skills).map(
			(key) => (
				<Card key={key}>
					<CardHeader>
						<h3 className='font-semibold leading-none' children={startCase(key)} />
					</CardHeader>
					<CardContent className='mt-2' children={
							<div className='flex flex-wrap gap-1'>
								{
									skills[key].map(
										(skill: any) => (<Badge key={skill} children={skill} />)
									)
								}
							</div>
						}
					/>
				</Card>
			)
		)
	}
}

export const SkillSection: React.FC<Props> = props => {
	const { skills } = props
	return !skills ? null : (
		<Section>
			<h2 className='font-bold text-xl'>
				Skills
			</h2>
			{buildIfObject.createElement(skills)}
		</Section>
	)
}
