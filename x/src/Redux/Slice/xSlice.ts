import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Identifier = number

export type XState = {
	records: Array<unknown>,
	id?: Identifier /// Keeps selected record’s id.
}

const initialState: XState = {
	records: [],
	id: undefined
}

export const xSlice = createSlice({
	name: 'x', initialState,

	reducers: {
		append: (state, action: PayloadAction<Array<unknown>>) => {
			state.records.push(action.payload)
		},
		select: (state, action: PayloadAction<Identifier>) => {
			state.id = action.payload
		}
	}
})

export const { append, select } = xSlice.actions
export const { reducer: xReducer } = xSlice
