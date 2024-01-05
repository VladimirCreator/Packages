/* Initially Modified at 01:34 AM on Sat 6 Jan 2024.
        Last Modified at 01:44 AM on Sat 6 Jan 2024.
*/
import { Badge } from './UI/Badge' // 01:35 AM on Sat 6 Jan 2024
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './UI/Card' // 01:35 AM on Sat 6 Jan 2024

type Props = {
	title: string; description: string
	tags: readonly string[]
	link?: string
}

export const ProjectCard: React.FC<Props> = props => {
	const { title, description, tags, link } = props
	return (
		<Card className='flex flex-col p-3 overflow-hidden border border-muted'>
			<CardHeader>
				<div className='space-y-1'>
					<CardTitle className='text-base'>
						{
							link ?
								<a className='inline-flex items-center gap-1 hover:underline' href={link} target='_blank'>
									{title}{' '}
									<span className='size-1 bg-green-500 rounded-full'></span>
								</a> : title
						}
					</CardTitle>
					<div className='text-xs font-mono hidden underline print:visible'>
						{link?.replace('https://', '').replace('www.', '').replace('/', '')}
					</div>
					<CardDescription className='text-xs font-mono'>
						{description}
					</CardDescription>
				</div>
			</CardHeader>
			<CardContent className='flex mt-auto'>
				<div className='flex flex-wrap mt-2 gap-1'>
					{
						tags.map(
							(tag) => (
								<Badge key={tag} className='text-[10px] px-1 py-0' variant='secondary'>
									{tag}
								</Badge>
							)
						)
					}
				</div>
			</CardContent>
		</Card>
	)
}
