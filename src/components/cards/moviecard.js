import React, { useState } from 'react'
import * as Icon from 'react-feather'
import { Imdb, Tomato } from '../assets/icons/generated'

const baseUrl = 'https://image.tmdb.org/t/p/original/'

const MovieCard = ({ poster, title, type }) => {

    const backgroundImage = baseUrl + poster

    const [toggleLike, setToggleLike] = useState(false)

    const handleToggle = () => {
        setToggleLike(prev => !prev)
    }

  return (
    <main>
        <div className='relative'>
            <img
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    objectFit: "contain",
                    backgroundPosition : "center center",
                }}
                className=''
                src={backgroundImage}
                loading='eager'
            />
            <header className='absolute top-0 w-full flex items-center justify-between p-5'>
                <span className={` ${type === 'tv' ? 'block' : 'invisible'} flex justify-start bg-mv-gray rounded-full p-2 text-mv-black text-xs font-bold `}>
                    TV SERIES
                </span>
                <span className='bg-mv-gray rounded-full p-2 flex items-end justify-end'>
                    <Icon.Heart onClick={handleToggle} stroke = '0px' style={{
                        fill: !toggleLike ? 'white' : '#EE4B2B',
                        cursor: 'Pointer'
                    }} />
                </span>
            </header>
        </div>
        <section className='space-y-2'>
            <span className='font-bold text-mv-gray text-sm'>USA, 2017 - Current</span>
            <p className='text-lg font-bold'>{title}</p>
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