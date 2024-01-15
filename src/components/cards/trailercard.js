import React, { useState } from 'react'
import { PlayICon } from '../assets/generated'
import FallBack from '../assets/images/banner.svg'

const baseUrl = 'https://image.tmdb.org/t/p/original/'

export const TrailerCard = ({ poster, title }) => {

    const backgroundImage = baseUrl + poster

  return (
    <main className='space-y-4'>
        <div className='relative'>
            <img
                style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    objectFit: "cover",
                    backgroundPosition : "",
                }}
                className='w-[900px] h-[280px]'
                src={backgroundImage ?? FallBack}
                onError={(e) => {
                    e.target.onerror = FallBack;
                    e.target.src =  FallBack;
                }}
                alt="trailer-thumbnail"
            />
        <PlayICon className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 right-0 cursor-pointer'/>
        </div>
        <section className='space-y-2'>
            <p className='font-bold text-lg'>{title}</p>
        </section>
    </main>
  )
}