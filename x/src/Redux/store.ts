import { configureStore } from '@reduxjs/toolkit'

import { xApi } from '../Service/'

export const store = configureStore({
	reducer: {
		[xApi.reducerPath]: xApi.reducer
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat(xApi.middleware)
	}
})
