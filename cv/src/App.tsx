import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from './Component/UI/Avatar'
import { Button } from './Component/UI/Button'
import { CommandMenu } from './Component/CommandMenu'
import { Section } from './Component/UI/Section'

import { EducationSection } from './Component/EducationSection' // 11:33 PM Sat 6 Jan 2024
import { SkillSection } from './Component/SkillSection' // 11:28 PM Sat 6 Jan 2024
import { ProjectSection } from './Component/ProjectSection' // 11:23 PM Sat 6 Jan 2024
import { WorkSection } from './Component/WorkSection' // 11:42 PM Sat 6 Jan 2024

type Resume = {
	[key: string]: any
}

const RESUME: Resume = JSON.parse(import.meta.env.VITE_DATA)

export const App = () => {
	const links = [
		{
			title: 'Personal Website', url: RESUME.personalWebsiteUrl
		},
		...RESUME.contact.social.map(
			(social: any) => ({
				title: social.name, url: social.url
			})
		)
	]

	return (
		<main className='container relative p-4 md:p-16 mx-auto overflow-auto scroll-my-12 print:p-12'>
			<section className='w-full max-w-2xl mx-auto space-y-8 bg-white print:space-y-6'>
				<div className='flex items-center justify-between'>
					<div className='flex-1 space-y-1.5'>
						<h1 className='font-bold text-2xl' children={RESUME.name} />
						<p className='text-sm font-mono text-muted-foreground text-pretty max-w-md' children={RESUME.about} />
						<p className='font-mono text-xs text-muted-foreground max-w-md items-center text-pretty'>
							<a className='inline-flex gap-x-1.5 align-baseline leading-none hover:underline'
								href={RESUME.locationLink} target='_blank'
							>
								<GlobeIcon className='size-3' />
								{RESUME.location}
							</a>
						</p>
						<div className='text-sm font-mono flex pt-1 gap-x-1 text-muted-foreground print:hidden'>
							{
								RESUME.contact.email ? (
									<Button className='size-8'
										variant='outline' size='icon' asChild
									>
										<a href={`mailto:${RESUME.contact.email}`}>
											<MailIcon className='size-4' />
										</a>
									</Button>
								) : null
							}
							{
								RESUME.contact.tel ? (
									<Button className='size-8'
										variant='outline' size='icon' asChild
									>
										<a href={`tel:${RESUME.contact.tel}`}>
											<PhoneIcon className='size-4' />
										</a>
									</Button>
								) : null
							}
							{
								RESUME.contact.social.map(
									(social: any) => (
										<Button key={social.name} className='size-8'
											variant='outline' size='icon' asChild
										>
											<a href={social.url}>
												<social.icon className='size-4' />
											</a>
										</Button>
									)
								)
							}
						</div>
						<div className='hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex'>
							{
								RESUME.contact.email ? (
									<a href={`mailto:${RESUME.contact.email}`}>
										<span className='underline'>{RESUME.contact.email}</span>
									</a>
								) : null
							}
							{
								RESUME.contact.tel ? (
									<a href={`tel:${RESUME.contact.tel}`}>
										<span className='underline'>{RESUME.contact.tel}</span>
									</a>
								) : null
							}
						</div>
					</div>
					<Avatar className='size-28'>
						<AvatarImage src={RESUME.avatarUrl} alt={RESUME.name} />
						<AvatarFallback>{RESUME.initials}</AvatarFallback>
					</Avatar>
				</div>
				<Section>
					<h2 className='font-bold text-xl'>About</h2>
					<p className='font-mono text-sm text-muted-foreground text-pretty' children={RESUME.summary} />
				</Section>
				<WorkSection work={RESUME.work} />
				<EducationSection education={RESUME.education} />
				<SkillSection skills={RESUME.skills} />
				<ProjectSection projects={RESUME.projects} />
			</section>
			<CommandMenu links={links} />
		</main>
	)
}
