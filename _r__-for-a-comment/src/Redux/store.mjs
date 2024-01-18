import { configureStore } from '@reduxjs/toolkit'
import { api } from '../Service'

const config = {
	reducer: {
		[api.reducerPath]: api.reducer
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat(api.middleware)
	}
}

export const store = configureStore(config)
