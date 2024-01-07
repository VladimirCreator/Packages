import { useState } from 'react'

import { List } from './Component/List/List'
import { Loading } from './Component/Loading'

import { DataContext } from './Context/DataContext'
import { iShouldNotBeTrackedByGit } from './iShouldNotBeTrackedByGit'

import { useRootQuery } from './Service/'

export const App: React.FC = () => {
	const [id, setId] = useState(0)
	const { data = iShouldNotBeTrackedByGit, isLoading } = useRootQuery()

	const handleSelect = (id: number) => {
		setId(id)
	}

	if (isLoading)
		return <Loading />
	else
		return (
			<DataContext.Provider value={data}
				children={
					<List id={id} onClick={handleSelect} />
				}
			/>
		)
}
