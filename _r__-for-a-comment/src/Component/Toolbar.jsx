export const Toolbar = props => {
	const { onSelect: callback } = props

	const handleChange = event => {
		const value = event.target
		callback(value)
	}

	return (
		<select className='block sm:container w-full md:w-auto md:fixed bottom-0 left-0 mx-auto md:m-4 p-3.5 text-neutral-600 md:shadow-md md:rounded-lg' onChange={handleChange}>
			<option value='date_ascending'>От старых к новым</option>
			<option value='date_descending'>От новых к старым</option>
		</select>
	)
}
