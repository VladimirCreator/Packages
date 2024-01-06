/* Initially Modified at 11:29 PM on Sat 6 Jan 2024
        Last Modified at 11:32 PM on Sat 6 Jan 2024
*/
import { Badge } from './UI/Badge' // 11:30 PM Sat 6 Jan 2024
import { Section } from './UI/Section' // 11:30 PM Sat 6 Jan 2024

type Props = {
	skills: any[]
}

export const SkillSection: React.FC<Props> = props => {
	const { skills } = props

	const listOfSkills = skills.map(
		(skill: any) => (
			<Badge key={skill} children={skill} />
		)
	)
	return (
		<Section>
			<h2 className='font-bold text-xl'>Skils</h2>
			<div className='flex flex-wrap gap-1' children={listOfSkills} />
		</Section>
	)
}
