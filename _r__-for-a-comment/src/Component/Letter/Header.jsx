import { useState } from 'react'

import { WindowIcon, ArrowRightIcon, Cog6ToothIcon, StarIcon as OutlineStarIcon } from '@heroicons/react/24/outline'
import { StarIcon as SolidStarIcon } from '@heroicons/react/24/solid'

const Button = ({ text }) => {
	const [isActive, setIsActive] = useState(false)

	const className = `w-16 h-7 text-xs leading-none border-[1px] border-blue-500 rounded-sm ${isActive ? 'text-white bg-blue-500 hover:text-blue-500 hover:bg-white' : 'text-blue-500 hover:text-white hover:bg-blue-500'}`
	return (
		<button className={className} type='button' onClick={() => setIsActive(!isActive)}>
			{text}
		</button>
	)
}

const ButtonContainer = ({ children }) => (
	<div className='space-x-2.5'>
		{children}
	</div>
)

export const Header = ({ id, author }) => {
	const [isFavorite, setIsFavorite] = useState(localStorage.getItem(id))

	const iconClassName = 'w-6 h-6 text-stone-300'

	const handleClick = () => {
		setIsFavorite(!isFavorite)
		if (isFavorite)
			localStorage.removeItem(id)
		else
			localStorage.setItem(id, !isFavorite)
	}

	return (
		<header className='md:flex mb-2.5 space-y-3 md:space-y-0 justify-between'>
			<div>
				<p className='mb-1.5 leading-none text-gray-500'>{author}</p>
				<p className='text-xs leading-none italic text-gray-500'>Текст поста в социальных сетях, если это комментарий</p>
			</div>

			<ButtonContainer>
				<Button text='Левый' /><Button text='Центр' /><Button text='Правый' />
			</ButtonContainer>

			<div className='flex space-x-1'>
				<ArrowRightIcon className={iconClassName} />
				<WindowIcon className={iconClassName} />
				<Cog6ToothIcon className={iconClassName} />
				{
					isFavorite ?
						<SolidStarIcon className='w-6 h-6 text-blue-500' onClick={handleClick} /> :
						<OutlineStarIcon className={iconClassName} onClick={handleClick} />
				}
			</div>
		</header>
	)
}
