import { Aside } from './Aside'
import { Header } from './Header'
import { Content } from './Content'
import { Footer } from './Footer'
import { Attachment } from './Attachment'

export const Letter = (props) => {
	const { letter, disclose, onClick } = props
	return (
		<article className='flex p-2.5 bg-white sm:shadow-xl cursor-default snap-center'>
			<aside className='flex flex-col items-center mr-2.5'>
				<Aside date={letter.date} />
			</aside>

			<section className='grow'>
				<Header {...letter} />
				<Content content={letter.content} disclose={disclose} onClick={onClick} />
				<Attachment attachments={letter.attachments} />
				<Footer />
			</section>
		</article>
	)
}
