import React from 'react'
import MovieCard from '../components/cards/moviecard'

const Movies = () => {
  return (
    <main className='px-24 pt-20 space-y-11 pb-4'>
      <header className='text-4xl font-bold'>Featured Movie</header>
      <section>
        <MovieCard />
      </section>
    </main>
  )
}

export default Movies