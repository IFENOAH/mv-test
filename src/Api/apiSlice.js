import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { requests } from './helper'

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/'
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query:() => ({
        url: requests.fetchTrending,
        method: "GET",
      })
    })
  })
})

export const { useGetMoviesQuery } = apiSlice