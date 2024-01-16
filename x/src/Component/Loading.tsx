type Props = {
	children: any
}

export const Loading: React.FC<Props> = ({ children }) => (
	<article className='absolute inset-0
		flex justify-center items-center
	'
	>
		<h1 className='font-medium font-mono text-3xl
			bg-gradient-to-r from-emerald-200 to-red-50 bg-clip-text
			animate-bounce
		'
			children={children}
		/>
	</article>
)
