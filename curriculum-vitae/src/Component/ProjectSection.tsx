import compact from 'lodash-es/compact'
import { useTranslation } from 'react-i18next'

import { Section } from '../Legacy'
import { ProjectCard } from '../Legacy'

type Props = {
	projects: any[]
}

export const ProjectSection: React.FC<Props> = props => {
	const { projects } = props
	const { t } = useTranslation()

	const listOfProjects = projects.map(
		(project: any) => {
			const { title, description, techStack, link, wip } = project
			if (wip) {
				return null
			}
			return (
				<ProjectCard key={title}
					title={title} description={description}
					tags={techStack}
					link={link.href}
				/>
			)
		}
	)
	const listOfWipProjects = projects.map(
		(project: any) => {
			const { title, description, techStack, link, wip } = project
			if (!wip) {
				return null
			}
			return (
				<ProjectCard key={title}
					title={title} description={description}
					tags={techStack}
					link={link.href}
				/>
			)
		}
	)
	return (
		<Section className='scroll-mb-16 print-force-new-page'>
			<h2 className='font-bold text-xl'>{t('projects')}</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 -mx-3 print:grid-cols-3 print:gap-2'
				children={compact(listOfProjects)}
			/>
			<h2 className='font-bold text-xl'>{t('wipProjects')}</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 -mx-3 print:grid-cols-3 print:gap-2'
				children={compact(listOfWipProjects)}
			/>
		</Section>
	)
}
