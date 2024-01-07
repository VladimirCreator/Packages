import { Badge } from './UI/Badge'
import { Card, CardContent, CardHeader } from './UI/Card' // 4:51 AM Mon 8 Jan 2024
import { Section } from './UI/Section'

type Props = {
	skills: any[] | any
}

function format(key: string): string { // Mon 8 Jan 2024 4:39 AM...4:45 AM
	const getFirstCharacter = (string: string): string => string.charAt(0)

	return key.split('-')
		.map(
			word => getFirstCharacter(word).toUpperCase() + word.substring(1)
		)
		.join(' ')
}

export const SkillSection: React.FC<Props> = props => {
	const { skills } = props

	if (Array.isArray(skills)) {
		const badges = skills.map(
			(skill: any) => (
				<Badge key={skill} children={skill} />
			)
		)
		return (
			<Section>
				<h2 className='font-bold text-xl'>Skills</h2>
				<div className='flex flex-wrap gap-1' children={badges} />
			</Section>
		)
	}

	const listOfSkills = Object.keys(skills).map(
		(key) => (
			<Card key={key}>
				<CardHeader>
					<h3 className='font-semibold leading-none' children={format(key)} />
				</CardHeader>
				<CardContent className='mt-2' children={
					skills[key].map(
						(skill: any) => (
							<Badge key={skill} children={skill} />
						)
					)
				} />
			</Card>
		)
	)
	return (
		<Section>
				<h2 className='font-bold text-xl'>Skills</h2>
				<div className='flex flex-wrap gap-1' children={listOfSkills} />
			</Section>
	)
}
