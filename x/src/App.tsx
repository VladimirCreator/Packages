import { useState } from 'react'

import { useApiQuery } from './Service'
import { List } from './Component/List'
import { Loading } from './Component/Loading'

export const App: React.FC = () => {
	const [identifier, setIdentifier] = useState(0)
	const { isLoading } = useApiQuery()

	const handleSelect = (identifier: number) => setIdentifier(identifier)

	if (isLoading) {
		return (
			<Loading children='@vladimircreator' />
		)
	}
	else {
		return (
			<List id={identifier} onSelectRow={handleSelect} />
		)
	}
}
