import {
	createApi, fetchBaseQuery
} from '@reduxjs/toolkit/query/react/'

const baseUrl = import.meta.env.VITE_LETTER_API_BASE_URL

export const api = createApi({
	reducerPath: 'letterApi',
	baseQuery: fetchBaseQuery({
		baseUrl
	}),
	endpoints: builder => ({
		letter: builder.query({
			query: () => ''
		})
	})
})

export const { useLetterQuery, useLazyLetterQuery } = api
