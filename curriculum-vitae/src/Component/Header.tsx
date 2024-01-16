import { icons /* I should not do this but I have to Jokerge 11:42 PM Tue 16 Jan 2024 */, GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '../Legacy'
import { Button } from '../Legacy'

type Props = {
	name: string, initials: string
	about: string
	avatarUrl: string
	location: string, locationLink: string,
	contact: {
		email: string, tel: string,
		social: { name: string, url: string }[]
	}
}

const Mail: React.FC<Record<string, unknown>> = props => { /* in:Thu 11 Jan 2024 4:41 PM...4:45 PM */
	const { email } = props
	if (!email) {
		return null
	}
	return (
		<Button className='size-8' variant='outline' size='icon' asChild>
			<a href={`mailto:${email}`}>
				<MailIcon className='size-4' />
			</a>
		</Button>
	)
}

const Phone: React.FC<Record<string, unknown>> = props => { /* in:Thu 11 Jan 2024 4:46 PM...4:47 PM */
	const { tel } = props
	if (!tel) {
		return null
	}
	return (
		<Button className='size-8' variant='outline' size='icon' asChild>
			<a href={`tel:${tel}`}>
				<PhoneIcon className='size-4' />
			</a>
		</Button>
	)
}

const Socials: React.FC<Record<string, Record<string, any>[]>> = props => { /* in:Thu 11 Jan 2024 4:48 PM...4:51 PM */
	const { social } = props
	return social.map(
		(social) => {
			const { name, url, icon } = social
			const Icon = icons[icon as keyof typeof icons]
			return (
				<Button key={name} className='size-8' variant='outline' size='icon' asChild>
					<a href={url}>
						<Icon className='size-4' />
					</a>
				</Button>
			)
		}
	)
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
					<Mail email={contact.email} />
					<Phone tel={contact.tel} />
					<Socials social={contact.social} />
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
				<AvatarFallback children={initials} />
			</Avatar>
		</div>
	)
}
