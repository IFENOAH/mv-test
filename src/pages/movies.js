import React from 'react'
import MovieCard from '../components/cards/moviecard'
import *as Icon from 'react-feather'
import { Carousel, MovieCarousel } from '../components/carousel/carousel'

const Movies = () => {
  return (
    <main className='px-24 pt-20 space-y-11 pb-4'>
      <header className='flex items-center justify-between'>
        <h2 className='text-4xl font-bold'>Featured Movie</h2>
        <span className='text-mv-red flex items-center space-x-4'>
          See more
          <Icon.ChevronRight />
        </span>
      </header>
      <MovieCarousel children={<MovieCard />}/>
    </main>
  )
}

export default Movies