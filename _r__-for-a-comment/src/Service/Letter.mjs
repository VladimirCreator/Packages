import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react/'

const baseUrl = import.meta.env.VITE_API

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: builder => ({
		letters: builder.query({ query: () => '/' })
	})
})

export const { useLettersQuery, useLazyLettersQuery } = api
