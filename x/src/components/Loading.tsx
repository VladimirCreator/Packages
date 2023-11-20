function Label({ text }: { text: string }) {
	return (
		<h1 className='font-medium text-3xl font-mono
				bg-gradient-to-r from-emerald-200 to-red-50 bg-clip-text
				animate-bounce
			'
			children={text}
		/>
	)
}

export default function Loading() {
	return (
		<article className='absolute inset-0 flex justify-center items-center'>
			<Label text='@vladimircreator' />
		</article>
	)
}
