import { Badge } from './UI'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './UI'

type Props = {
	title: string; description: string
	readonly techStack: string[]
	link?: string
}

export const ProjectCard: React.FC<Props> = props => {
	const { title, description, techStack: tags, link } = props
	return (
		<Card className='flex flex-col p-3 overflow-hidden border border-muted'>
			<CardHeader>
				<div className='space-y-1'>
					<CardTitle className='text-base'>
						{
							link ? <a className='inline-flex items-center gap-1 hover:underline' href={link} target='_blank'>
								{title}{' '}
								<span className='size-1 bg-green-500 rounded-full' />
							</a> : title
						}
					</CardTitle>
					<div className='text-xs font-mono hidden underline print:visible'>
						{link?.replace('https://', '').replace('www.', '').replace('/', '')}
					</div>
					<CardDescription className='text-xs font-mono' children={description} />
				</div>
			</CardHeader>
			<CardContent className='flex mt-auto'>
				<div className='flex flex-wrap mt-2 gap-1'>
					{
						tags.map(
							(tag: any) => (
								<Badge key={tag} className='text-[10px] px-1 py-0' children={tag}
									variant='secondary'
								/>
							)
						)
					}
				</div>
			</CardContent>
		</Card>
	)
}
