import { configureStore } from '@reduxjs/toolkit'

import { xReducer } from './Slice/xSlice'
import { xApi } from '../Service/'

export const store = configureStore({
	reducer: {
		x: xReducer,
		[xApi.reducerPath]: xApi.reducer
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat(xApi.middleware)
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
