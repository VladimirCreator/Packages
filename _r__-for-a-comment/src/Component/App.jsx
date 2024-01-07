import { useState } from 'react'

import { Toolbar } from './'
import { LetterList } from './'
import { useLettersQuery, useLazyLettersQuery } from '../Service/'

const pollingInterval = 5000

export const App = () => {
	const [order, setOrder] = useState('date_ascending')

  /** Unfortunately, my knowledge does not allow me to merge `ugly1` and `ugly2`.
      Please, make a pull request if you know how to make this more elegant.
  */
	const { data: ugly1 } = useLettersQuery(
		{ actionName: 'MessagesLoad', messageId: ugly1?.at(-1) ?? 0 },
		{ pollingInterval }
	)
	const [, ugly2] = useLazyLettersQuery()

	const letters = ugly1.concat(ugly2)
	return (
		<>
			<Toolbar onSelect={setOrder} />
			<LetterList letters={letters} order={order} />
		</>
	)
}
