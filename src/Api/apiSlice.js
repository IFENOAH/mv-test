import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY } from './helper'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/'
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query:(category) => ({
        url: category,
        method: "GET",
      })
    }),
    getCasts: builder.query({
      query:({id}) => ({
        url: `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
        method: "GET",
      })
    }),
  })
})

export const { 
  useGetMoviesQuery,
  useGetCastsQuery,
} = apiSlice