import React from 'react'
import MovieCard from '../components/cards/moviecard'
import *as Icon from 'react-feather'
import Carousel from "react-elastic-carousel";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 }
];

const Movies = () => {
  return (
    <main className='pt-20 space-y-11 pb-4'>
      <header className='px-24 flex items-center justify-between'>
        <h2 className='text-4xl font-bold'>Featured Movie</h2>
        <span className='text-mv-red flex items-center space-x-4'>
          See more
          <Icon.ChevronRight />
        </span>
      </header>
      <Carousel breakPoints={breakPoints}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </Carousel>
    </main>
  )
}

export default Movies