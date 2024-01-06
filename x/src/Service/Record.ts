import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Input = string
type Output = Array<unknown>

const baseUrl = import.meta.env.VITE_URL

export const xApi = createApi({
	reducerPath: 'xApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: builder => ({
		root: builder.query<Output, Input>({ query: () => `` })
	})
})

export const { useRootQuery } = xApi
