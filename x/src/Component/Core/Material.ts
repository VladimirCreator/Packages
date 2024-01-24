import React from 'react'

type Props = {
	[key: string]: any
}

export const Material: React.FC<Props> = props => {
	const { component, children, ...rest } = props
	return React.createElement(
		component,
		{
			...rest,
			className: 'bg-slate-100/80 dark:bg-neutral-800/80 backdrop-blur',
		},
		children
	)
}

