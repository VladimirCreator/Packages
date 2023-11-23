type Props = {
	component: Function,
	children: React.ReactNode
}

export const Material: React.FC<Props> = (props) => {
	const { component, children } = props
	return component({
		className: 'bg-slate-100/80 dark:bg-neutral-800/80 backdrop-blur',
		children
	})
}
