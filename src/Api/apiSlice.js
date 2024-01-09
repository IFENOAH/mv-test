import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
    })
  })
})

export const { useGetMoviesQuery } = apiSlice