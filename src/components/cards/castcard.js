import React, { useState } from 'react'
import * as Icon from 'react-feather'
import { Imdb, Tomato } from '../assets/icons/generated'

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
                    objectFit: "contain",
                    backgroundPosition : "center center",
                }}
                className=''
                src={backgroundImage}
            />
        </div>
        <section className='space-y-2'>
            <p className='font-bold text-sm'>{name}</p>
        </section>
    </main>
  )
}

export default CastCard