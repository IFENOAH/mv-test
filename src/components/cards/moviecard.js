import React from 'react'
import * as Icon from 'react-feather'
import Poster from '../assets/images/Poster.svg'

const MovieCard = () => {
  return (
    <div className='w-64 h-96' style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "contain",
        backgroundPosition : "center center",
        backgroundImage: `url(${Poster})`
    }}>
        <header className='flex items-center justify-between p-5'>
            <span className='bg-mv-gray rounded-full p-2 text-mv-black text-xs'>
                TV SERIES
            </span>
            <span className='bg-mv-gray rounded-full p-2'>
                <Icon.Heart style={{
                    fill: 'white'
                }} />
            </span>
        </header>
    </div>
  )
}

export default MovieCard