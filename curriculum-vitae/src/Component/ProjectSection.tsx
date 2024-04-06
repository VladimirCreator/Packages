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
function createFilteredProjectBlock({
	title,
	callback
}: {
	title: string
	callback: (project: any) => boolean
}) {
	return (props: Props) => {
		const { projects } = props
		const { t } = useTranslation()
		const filteredProjects = projects.map(
			(project: any) => {
				if (!callback(project)) {
					return null
				}
				const { title: nazvanie, link, ...rest } = project
				return (
					<ProjectCard key={nazvanie} title={nazvanie} link={link.href} {...rest} />
				)
			}
		)
		return (
			<>
				<h2 className='font-bold text-xl'>{t(title)}</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 -mx-3 print:grid-cols-3 print:gap-2' children={compact(filteredProjects)} />
			</>
		)
	}
}

const Projects = createFilteredProjectBlock({
	title: 'projects', callback: (project) => !project.gist && !project.wip,
})

const WIPProjects = createFilteredProjectBlock({
	title: 'wipProjects', callback: (project) => project.wip,
})

const GistProjects = createFilteredProjectBlock({
	title: 'gists', callback: (project) => project.gist,
})

export const ProjectSection: React.FC<Props> = props => {
	const { projects } = props
	return (
		<Section className='scroll-mb-16 print-force-new-page'>
			<Projects projects={projects} />
			<GistProjects projects={projects} />
			<WIPProjects projects={projects} />
		</Section>
	)
}
