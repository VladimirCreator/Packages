export const Toolbar = props => {
	const { onSelect: callback } = props

	const handleChange = event => {
		const { value } = event.target; callback(value)
	}

	return (
		<select className='text-neutral-600 sm:container
			md:fixed bottom-0 left-0 block
			w-full md:w-auto
			mx-auto md:m-4
			p-3.5
			md:rounded-lg
			md:shadow-md
		'
			onChange={handleChange}
		>
			<option value='date_ascending'>От старых к новым</option>
			<option value='date_descending'>От новых к старым</option>
		</select>
	)
}
