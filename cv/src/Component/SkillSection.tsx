import startCase from 'lodash-es/startCase'

import { Badge } from './UI/'
import { Card, CardContent, CardHeader } from './UI/'
import { Section } from './UI/'

type Builder = { // init 12:06 PM Wed 10 Jan 2024
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
			<Section>
				<h2 className='font-bold text-xl'>
					Skills
				</h2>
				<div className='flex flex-wrap gap-1' children={badges} />
			</Section>
		)
	}
}

const buildIfObject: Builder = {
	nextBuilder: buildIfArray,

	createElement(skills) {
		if (Array.isArray(skills)) {
			return this.nextBuilder?.createElement(skills)
		}
		const listOfSkills = Object.keys(skills).map(
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
		return (
			<Section>
				<h2 className='font-bold text-xl'>Skills</h2>
				{listOfSkills}
			</Section>
		)
	}
}

export const SkillSection: React.FC<Props> = props => {
	const { skills } = props
	return skills ? buildIfObject.createElement(skills) : null
}
