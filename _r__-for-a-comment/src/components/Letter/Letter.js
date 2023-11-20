import LetterAside from './LetterAside'
import LetterHeader from './LetterHeader'
import LetterContent from './LetterContent'
import LetterFooter from './LetterFooter'
import LetterAttachment from './LetterAttachment'

export default function Letter({ letter, disclose, onClick }) {
	return (
		<article className='flex p-2.5 bg-white sm:shadow-xl cursor-default snap-center'>
			<aside className='flex flex-col items-center mr-2.5'>
				<LetterAside date={letter.date} />
			</aside>

			<section className='grow'>
				<LetterHeader {...letter} />
				<LetterContent content={letter.content} disclose={disclose} onClick={onClick} />
				<LetterAttachment attachments={letter.attachments} />
				<LetterFooter />
			</section>
		</article>
	)
}
