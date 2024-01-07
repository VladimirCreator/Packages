import { Aside } from './Aside'
import { Header } from './Header'
import { Content } from './Content'
import { Footer } from './Footer'
import { Attachment } from './Attachment'
/*
import type { Props } from './Props'
*/

export const Letter = props => {
	const { letter, disclose, onClick } = props
	const { date, content, attachments } = letter
	return (
		<article className='flex p-2.5 bg-white sm:shadow-xl cursor-default snap-center'>
			<Aside date={date} />
			<section className='grow'>
				<Header {...letter} />
				<Content content={content} disclose={disclose} onClick={onClick} />
				<Attachment attachments={attachments} />
				<Footer />
			</section>
		</article>
	)
}
