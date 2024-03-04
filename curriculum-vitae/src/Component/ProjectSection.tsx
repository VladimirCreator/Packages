import compact from 'lodash-es/compact'
import { useTranslation } from 'react-i18next'

import { Section } from '../Legacy'
import { ProjectCard } from '../Legacy'

type Props = {
	projects: any[]
}

/** Looks good!
  * @param props
*/
function createFilteredProjectBlock(props: Props & {
	title: string
	callback: (project: any) => boolean
}) {
	const {
		title, projects,
		callback
	} = props
	const { t } = useTranslation()
	const filteredProjects = projects.map(
		(project: any) => {
			if (callback(project)) {
				return null
			}
			const { title: nazvanie, ...rest } = project
			return (
				<ProjectCard key={nazvanie} {...rest} />
			)
		}
	)

	return (
		<>
			<h2 className='font-bold text-xl'>{t(title)}</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 -mx-3 print:grid-cols-3 print:gap-2'
				children={compact(filteredProjects)}
			/>
		</>
	)
}

export const ProjectSection: React.FC<Props> = props => {
	const { projects } = props
	const projectsJSX = createFilteredProjectBlock(
		{
			title: 'projects', projects,
			callback: () => true,
		}
	)
	const gistsJSX = createFilteredProjectBlock(
		{
			title: 'gists', projects,
			callback: (project) => project.gist,
		}
	)
	const wipProjectsJSX = createFilteredProjectBlock(
		{
			title: 'wipProjects', projects,
			callback: (project) => project.wip,
		}
	)

	return (
		<Section className='scroll-mb-16 print-force-new-page'>
			{projectsJSX}
			{gistsJSX}
			{wipProjectsJSX}
		</Section>
	)
}
