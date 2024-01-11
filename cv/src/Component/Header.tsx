/* This file is created  at 9:01 AM on Thu 11 Jan 2024
   This file is finished at 9:20 AM on Thu 11 Jan 2024
*/
import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from './UI/'
import { Button } from './UI/'

type Props = { // last 9:15 AM) Thu 11 Jan 2024
	name: string, initials: string
	about: string
	avatarUrl: string
	location: string, locationLink: string,
	contact: {
		email: string, tel: string,
		social: { name: string, url: string }[]
	}
}

export const Header: React.FC<Props> = props => {
	const {
		name, initials,
		about,
		avatarUrl,
		location, locationLink,
		contact
	} = props

	return (
		<div className='flex items-center justify-between'>
			<div className='flex-1 space-y-1.5'>
				<h1 className='font-bold text-2xl' children={name} />
				<p className='text-sm font-mono text-muted-foreground text-pretty max-w-md' children={about} />
				<p className='font-mono text-xs text-muted-foreground max-w-md items-center text-pretty'>
					<a className='inline-flex gap-x-1.5 align-baseline leading-none hover:underline'
						href={locationLink} target='_blank'
					>
						<GlobeIcon className='size-3' />
						{location}
					</a>
				</p>
				<div className='text-sm font-mono flex pt-1 gap-x-1 text-muted-foreground print:hidden'>
					{
						contact.email ? (
							<Button className='size-8'
								variant='outline' size='icon' asChild
							>
								<a href={`mailto:${contact.email}`}>
									<MailIcon className='size-4' />
								</a>
							</Button>
						) : null
					}
					{
						contact.tel ? (
							<Button className='size-8'
								variant='outline' size='icon' asChild
							>
								<a href={`tel:${contact.tel}`}>
									<PhoneIcon className='size-4' />
								</a>
							</Button>
						) : null
					}
					{
						contact.social.map(
							(social: any) => (
								<Button key={social.name} className='size-8'
									variant='outline' size='icon' asChild
								>
									<a href={social.url}
										children={ <social.icon className='size-4' /> }
									/>
								</Button>
							)
						)
					}
				</div>

				<div className='hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex'>
					{
						contact.email ? (
							<a href={`mailto:${contact.email}`}
								children={<span className='underline' children={contact.email} />}
							/>
						) : null
					}
					{
						contact.tel ? (
							<a href={`tel:${contact.tel}`}
								children={<span className='underline' children={contact.tel} />}
							/>
						) : null
					}
				</div>
			</div>
			<Avatar className='size-28'>
				<AvatarImage src={avatarUrl} alt={name} />
				<AvatarFallback>{initials}</AvatarFallback>
			</Avatar>
		</div>
	)
}
