import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { xReducer } from './Slice/xSlice'
import { xApi } from '../Service/Record'

export const store = configureStore({
	reducer: {
		x: xReducer,
		[xApi.reducerPath]: xApi.reducer
	},

	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(xApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
