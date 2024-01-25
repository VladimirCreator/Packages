import type { Topic } from '../type'

type HeaderProps = {
	topic: Topic
	relatedTopics: Topic[]
}

const Header: React.FC<HeaderProps> = props => {
	const {
		topic,
		relatedTopics
	} = props

	const relatedTopicsAsJSX = relatedTopics.map(
		(topic) => (
			<li key={topic}>{topic}</li>
		)
	)
	return (
		<header>
			<small>Copyright&nbsp;&copy;&nbsp;2022&nbsp;Petrov&nbsp;Vladimir&nbsp;Leonidovich. All rights reserved.</small>
			<h1>{topic}</h1>
			<p hidden>This document includes <em>{topic}</em>.</p>
			<h4 hidden>Related Topics</h4>
			<ul hidden>{relatedTopicsAsJSX}</ul>
		</header>
	)
}

type Location = 'local' | 'server' /* Example:
	local can be On My iPad
	server can be iCloud
*/

type Book = {
	title: string; author: string
	read?: boolean; pending?: boolean
	programmingLanguage?: Topic
}

type SectionProps = {
	location: Location
	children?: any
}

const mapper = (book: Book) => {
	const { title, author, programmingLanguage } = book

	const programmingLanguageAsJSX = !programmingLanguage ? undefined : (
		<>
			<br />
			<span className={`programming-language ${programmingLanguage}`}>
				${programmingLanguage}
			</span>
		</>
	)
	return (
		<>
			<li key={author} title={author}>
				{title}
				{programmingLanguageAsJSX}
			</li>
		</>
	)
}

const Section: React.FC<SectionProps> = props => {
	const {
		location,
		children
	} = props
	const title = `Этот раздел содержит список материалов, которые находятся на ${location}.`

	return (
		<section>
			<h2 title={title}>{location}</h2>
			{children}
		</section>
	)
}

type FooterProps = {
	markdown?: string
}

const Footer: React.FC<FooterProps> = props => {
	const { markdown } = props

	const hasMarkdown = typeof markdown === 'string'
	return !hasMarkdown ? null : (
		<footer>
			<h2>from me</h2>
			{markdown}
		</footer>
	)
}

type Props = HeaderProps &
	FooterProps &
	{
		locations: Record<Location, Book[]>
	}

export const Collection: React.FC<Props> = props => {
	const {
		locations: locationsAsDictionary,
		...rest
	} = props

	const sections = Object.keys(locationsAsDictionary).map( /* Ultra Cringe! */
		(location) => {
			const books = locationsAsDictionary[location as Location]
			/* TODO: I want to replace the chain of function with the only function.
		I know Swift’s `compactMap(_: )` function but what alternative does TypeScript have?
			*/
			const readBooks = books.filter(book => book.read).map(mapper)
			const unreadBooks = books.filter(book => !book.read).map(mapper)
			const pendingBooks = books.filter(() => location === 'server').map(mapper)

			return <Section location={location as Location}>
				{
					location.includes('local') ? (
						<>
							<h3 id='read'>Read</h3>
							<ol>{readBooks}</ol>
							<h3 id='unread'>Unread</h3>
							<ol>{unreadBooks}</ol>
						</>
					) : (
						<>
							<h3 id='pending'>Pending</h3>
							<ol>{pendingBooks}</ol>
						</>
					)
				}
			</Section>
		}
	)
	return (
		<>
			<Header {...rest} />
			{sections}
			<Footer {...rest} />
		</>
	)
}
