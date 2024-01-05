/*
        Last Modified: 02:34 AM Sat 6 Jan 2024
*/
import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from './Component/UI/Avatar' // 1:57 AM Sat 6 Jan 2024
import { Card, CardHeader, CardContent } from './Component/UI/Card' // 1:58 AM Sat 6 Jan 2024
import { Badge } from './Component/UI/Badge' // 1:58 AM Sat 6 Jan 2024
import { CommandMenu } from './Component/CommandMenu' // 1:58 AM Sat 6 Jan 2024
import { Section } from './Component/UI/Section' // 1:58 AM Sat 6 Jan 2024
import { Button } from './Component/UI/Button' // 1:59 AM Sat 6 Jan 2024
import { ProjectCard } from './Component/ProjectCard' // 1:59 AM Sat 6 Jan 2024

const RESUME: {
	[key: string]: any
} = {}

export const App = () => {
	return (
		<main className='container relative p-4 md:p-16 mx-auto scroll-my-12 overflow-auto print:p-12'>
			<section className='w-full max-w-2xl mx-auto space-y-8 bg-white print:space-y-6'>
				<div className='flex items-center justify-between'>
					<div className='flex-1 space-y-1.5'>
						<h1 className='font-bold text-2xl'>{RESUME.name}</h1>
						<p className='text-sm font-mono text-muted-foreground text-pretty max-w-md'>
							{RESUME.about}
						</p>
						<p className='max-w-md items-center text-pretty font-mono text-xs text-muted-foreground'>
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

						<Avatar className='size-28'>
							<AvatarImage src={RESUME.avatarUrl} alt={RESUME.name} />
							<AvatarFallback>{RESUME.initials}</AvatarFallback>
						</Avatar>
					</div>

					<Section>
						<h2 className='font-bold text-xl'>About</h2>
						<p className='font-mono text-sm text-muted-foreground text-pretty'>
							{RESUME.summary}
						</p>
					</Section>
					<Section>
						<h2 className='font-bold text-xl'>Work Experience</h2>
						{
							RESUME.work.map(
								(work: any) => (
									<Card key={work.company}>
										<CardHeader>
											<div className='text-base flex items-center justify-between gap-x-2'>
												<h3 className='inline-flex items-center justify-center gap-x-1 font-semibold leading-none'>
													<a className='hover:underline' href={work.link}>
														{work.company}
													</a>
													<span className='inline-flex gap-x-1'>
														{
															work.badges.map(
																(badge: any) => (
																	<Badge key={badge} className='text-xs align-middle'
																		variant='secondary'
																	>
																		{badge}
																	</Badge>
																)
															)
														}
													</span>
												</h3>
												<div className='text-sm text-gray-500 tabular-nums'>
													{work.start} - {work.end}
												</div>
											</div>
											<h4 className='font-mono text-sm leading-none'>
												{work.title}
											</h4>
										</CardHeader>
										<CardContent className='text-xs mt-2'>
											{work.description}
										</CardContent>
									</Card>
								)
							)
						}
					</Section>
					<Section>
						<h2 className='font-bold text-xl'>Education</h2>
						{
							RESUME.education.map(
								(education: any) => (
									<Card key={education.school}>
										<CardHeader>
											<div className='flex items-center justify-between gap-x-2 text-base'>
												<h3 className='font-semibold leading-none'>{education.school}</h3>
												<div className='text-sm text=gray-500 tabular-nums'>
													{education.start} - {education.end}
												</div>
											</div>
										</CardHeader>
										<CardContent className='mt-2'>{education.degree}</CardContent>
									</Card>
								)
							)
						}
					</Section>
					<Section>
						<h2 className='font-bold text-xl'>Skils</h2>
						<div className='flex flex-wrap gap-1'>
							{
								RESUME.skills.map(
									(skill: any) => (
										<Badge key={skill} children={skill} />
									)
								)
							}
						</div>
					</Section>
					<Section className='scroll-mb-16 print-force-new-page'>
						<h2 className='font-bold text-xl'>Projects</h2>
						{
							RESUME.projects.map(
								(project: any) => (
									<ProjectCard key={project.title}
										title={project.title} description={project.description}
										tags={project.techStack}
										link={project.link.href}
									/>
								)
							)
						}
					</Section>

					<CommandMenu links={
						[
							{ url: RESUME.personalWebsiteUrl, title: 'Personal Website' },
							...RESUME.contact.social.map(
								(social: any) => ({ url: social.url, title: social.name })
							)
						]
					}
					/>
				</div>
			</section>
		</main>
	)
}
