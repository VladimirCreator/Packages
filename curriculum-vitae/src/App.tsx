import { useTranslation } from 'react-i18next'

import { CommandMenu, Section } from './Legacy'
import { EducationSection, Header, ProjectSection, SkillSection, WorkSection } from './Component'

import type { PropsOf } from 'propsof/propsof'

type Resume = Readonly<
	PropsOf<typeof Header> &
	PropsOf<typeof WorkSection> &
	PropsOf<typeof EducationSection> &
	PropsOf<typeof SkillSection> &
	PropsOf<typeof ProjectSection> &
	{ summary: string } &
	{ personalWebsiteUrl: string }
>

export const App = () => {
	const data: Resume = JSON.parse(import.meta.env.VITE_ENVIRONMENT_DATA)
	const { t } = useTranslation()

	const links = [
		{ title: t('personalWebsite'), url: data.personalWebsiteUrl },
		...data.contact.social.map(
			({ name: title, url }: any) => ({ title, url })
		)
	]
	return (
		<main className='container relative p-4 md:p-16 mx-auto overflow-auto scroll-my-12 print:p-12'>
			<section className='w-full max-w-2xl mx-auto space-y-8 bg-white print:space-y-6'>
				<Header {...data} />
				<Section>
					<h2 className='font-bold text-xl'>{t('description')}</h2>
					<p className='font-mono text-sm text-muted-foreground text-pretty' children={data.summary} />
				</Section>
				<WorkSection {...data} />
				<EducationSection {...data} />
				<SkillSection {...data} />
				<ProjectSection {...data} />
			</section>
			<CommandMenu links={links} />
		</main>
	)
}
