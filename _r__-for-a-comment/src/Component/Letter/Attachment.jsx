export const Attachment = ({ attachments }) => {
	const assets = attachments.map(
		(attachment, index) => {
			const type = attachment.type === 'video' ? 'video' : 'img'
			const props = {
				key: index,
				className: 'max-h-28 sm:max-h-56 [&:not(:last-child)]:mb-2.5 rounded snap-center',
				src: attachment.url
			}
			return React.createElement(type, props)
		}
	)

	return (
		<section className='flex space-x-8 -ml-14 -mr-2.5 mb-2 px-14 overflow-x-auto snap-x'>
			{assets}
		</section>
	)
}
