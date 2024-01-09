import React, { useRef } from 'react'
import * as Icon from 'react-feather'
import { requests } from '../Api/helper'
import { CastRow } from '../components/movierow/castrow'
import { MovieRow } from '../components/movierow/movieRow'

const Movies = () => {

  return (
    <main className='pt-20 space-y-16 pb-4'>

      <section className='space-y-10'>
        <MovieHeader title='Featured Movie' />
        <MovieRow genre={requests.fetchNowPlaying} />
      </section>

      <section className='space-y-10'>
        <MovieHeader title='New Arrival' />
        <MovieRow genre={requests.fetchTrending} />
      </section>

      <section className='space-y-10'>
        <MovieHeader title='Casts' />
        <CastRow genre={requests.fetchCasts} />
      </section>
      
    </main>
  )
}

export default Movies

export const MovieHeader = ({ title }) => {
  return (
    <header className='px-4 md:px-24 flex items-center justify-between'>
        <h2 className='text-2xl md:text-4xl font-bold whitespace-nowrap'>{title}</h2>
        <span className='text-mv-red flex items-center space-x-4'>
          See more
          <Icon.ChevronRight />
        </span>
      </header>
  )
}