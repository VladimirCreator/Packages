import { useState } from 'react'

import { Toolbar } from '.'
import { LetterList } from '.'
import { useLetterQuery, useLazyLetterQuery } from '../Service'

const pollingInterval = 5000

export const App = () => {
	const [order, setOrder] = useState('date_ascending')

  /** Unfortunately, my knowledge does not allow me to merge `ugly1` and `ugly2`.
      Please, make a pull request if you know how to make this more elegant.
  */
	const { data: ugly1 = JSON.parse(import.meta.env.VITE_ENVIRONMENT_DATA) } = useLetterQuery(
		{ actionName: 'MessagesLoad', messageId: 0 }, // `messageId` must be the last's letter id.
		{ pollingInterval }
	)
	const [, { data: ugly2 = [] }] = useLazyLetterQuery()

	const letters = ugly1.concat(ugly2)
	return (
		<>
			<Toolbar onSelect={setOrder} />
			<LetterList letters={letters} order={order} />
		</>
	)
}
