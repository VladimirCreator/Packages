import { useState } from 'react'

import { List } from './Component/List'
import { Loading } from './Component/Loading'
import { useXQuery } from './Service'

export const App: React.FC = () => {
	const [identifier, setIdentifier] = useState(0)
	const { isLoading } = useXQuery()

	const handleSelect = (identifier: number) => {
		setIdentifier(identifier)
	}

	if (isLoading) {
		return (
			<Loading children='@vladimircreator' />
		)
	}
	return (
		<List id={identifier}
			onSelectRow={handleSelect}
		/>
	)
}
