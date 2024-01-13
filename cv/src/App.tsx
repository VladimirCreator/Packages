import { Section } from './Component/UI/'
import { CommandMenu, EducationSection, Header, ProjectSection, SkillSection, WorkSection } from './Component/'

const RESUME: any = JSON.parse(import.meta.env.VITE_DATA ?? '{}')

export const App = () => {
	const links = [
		{ title: 'Personal Website', url: RESUME.personalWebsiteUrl },
		RESUME.contact.social.map(
			({ name: title, url }: any) => ({ title, url })
		)
	].flat(Infinity)

	return (
		<main className='container relative p-4 md:p-16 mx-auto overflow-auto scroll-my-12 print:p-12'>
			<section className='w-full max-w-2xl mx-auto space-y-8 bg-white print:space-y-6'>
				<Header {...RESUME} />
				<Section>
					<h2 className='font-bold text-xl'>About</h2>
					<p className='font-mono text-sm text-muted-foreground text-pretty' children={RESUME.summary} />
				</Section>
				<WorkSection {...RESUME} />
				<EducationSection {...RESUME} />
				<SkillSection {...RESUME} />
				<ProjectSection {...RESUME} />
			</section>
			<CommandMenu links={links} />
		</main>
	)
}
