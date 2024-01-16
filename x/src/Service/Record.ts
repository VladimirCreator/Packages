import {
	createApi,
	fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

type Input = void
type Output = unknown[]

const baseUrl = import.meta.env.VITE_X_API_BASE_URL

export const xApi = createApi({
	reducerPath: 'xApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: builder => ({
		x: builder.query<Output, Input>({
			query: () => ''
		})
	})
})

export const { useXQuery } = xApi
