import { useRef, useEffect } from 'react'

export const Content = props => {
	const { content, disclose, onClick } = props

	const detailRef = useRef(null)
	const paragraphRef = useRef(null)

	const resizeEffect = () => {
		const [detail, p] = [detailRef.current, paragraphRef.current]

		if (detail.clientHeight === detail.scrollHeight) {
			p.setAttribute('hidden', '')
		}
		return () => p.removeAttribute('hidden')
	}

	useEffect(resizeEffect, [detailRef, paragraphRef])
	return (
		<section>
			<details ref={detailRef} className='mb-2.5 break-all line-clamp-3 open:line-clamp-none pointer-events-none' open={disclose}>
				<summary className='leading-snug text-slate-700 list-none'>
					{content}
				</summary>
			</details>

			<p ref={paragraphRef} className='my-2.5 text-xs leading-none text-gray-500 hover:text-blue-500 cursor-pointer' onClick={onClick}>
				{disclose ? 'Скрыть' : 'Далее'}
			</p>
		</section>
	)
}
