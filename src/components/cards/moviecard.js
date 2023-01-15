import React, { useState } from 'react'
import * as Icon from 'react-feather'
import { Imdb, Tomato } from '../assets/icons/generated'
import Poster from '../assets/images/Poster.svg'

const MovieCard = () => {

    const [toggleLike, setToggleLike] = useState(false)

    const handleToggle = () => {
        setToggleLike(prev => !prev)
    }
  return (

    <main>
        <div className='w-64 h-96' style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "contain",
            backgroundPosition : "center center",
            backgroundImage: `url(${Poster})`
        }}>
            <header className='flex items-center justify-between p-5'>
                <span className='bg-mv-gray rounded-full p-2 text-mv-black text-xs font-bold'>
                    TV SERIES
                </span>
                <span className='bg-mv-gray rounded-full p-2'>
                    <Icon.Heart onClick={handleToggle} stroke = '0px' style={{
                        fill: !toggleLike ? 'white' : '#EE4B2B',
                        cursor: 'Pointer'
                    }} />
                </span>
            </header>
        </div>
        <section className='space-y-2'>
            <span className='font-bold text-mv-gray text-sm'>USA, 2017 - Current</span>
            <p className='text-lg font-bold'>Dunkirk</p>
            <div className='flex items-center space-x-6'>
                <div className='flex items-center space-x-2'>
                    <Imdb />
                    <span className='text-mv-main font-normal'>78.0 / 100</span>
                </div>
                <div className='flex items-center space-x-2'>
                    <Tomato />
                    <span className='text-mv-main font-normal'>94%</span>
                </div>
            </div>
            <p className='font-bold text-mv-gray text-sm'>Action, Drama, History</p>
        </section>
    </main>
  )
}

export default MovieCard