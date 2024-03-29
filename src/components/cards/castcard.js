import React, { useState } from 'react'
import FallBack from '../assets/images/fallback.png'

const baseUrl = 'https://image.tmdb.org/t/p/original/'

const CastCard = ({ poster, name }) => {

    const backgroundImage = baseUrl + poster

  return (
    <main className='space-y-4'>
        <div className=''>
            <img
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    objectFit: "cover",
                    backgroundPosition : "",
                }}
                className='w-full h-[580px] bg-mv-main'
                src={backgroundImage ?? FallBack}
                onError={(e) => {
                    e.target.onerror = FallBack;
                    e.target.src =  FallBack;
                }}
                alt="cast"
            />
        </div>
        <section className='space-y-2'>
            <p className='font-bold text-sm'>{name}</p>
        </section>
    </main>
  )
}

export default CastCard