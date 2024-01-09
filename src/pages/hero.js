import React, { useEffect, useState } from 'react'
import Button from '../components/forms/button'
import Input from '../components/forms/input'
import * as Icon from 'react-feather'
import banner from '../components/assets/images/banner.svg'
import { Tomato, Imdb, Tv } from '../components/assets/icons/generated'
import { useGetMoviesQuery } from '../Api/apiSlice'
import { requests } from '../Api/helper'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { MenuICon } from '../components/assets/generated'

const base_url = "https://image.tmdb.org/t/p/original/";

const Hero = () => {
    
    let isMonitor = useMediaQuery("(max-width: 768px)");

    const [ movie, setMovie ] = useState([]);

    const { data } = useGetMoviesQuery(requests.fetchTrending, {
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
        refetchOnReconnect: true
    });

    useEffect(() => {
        setMovie(
            data?.results?.[
                Math.floor(Math.random() * data.results?.length - 1)
            ]
        )
    }, [data])
    
  return (
    <div className='md:px-24 pt-[15px] h-[650px] p-4 relative'>
        <nav className='flex items-center justify-between py-2 absolute left-0 right-0 top-0 md:px-24 p-4 pt-6 z-10'>
            <div className='flex items-center space-x-4'>
                <Tv />
                <h2 className='text-mv-white text-lg sm:text-2xl font-bold'>MovieBox</h2>
            </div>
            <div className={`${ !isMonitor ? 'block' : 'hidden' } w-2/4`}>
                <Input rightIcon={<Icon.Search style={{color: 'white'}} />} />
            </div>
            <div className='flex items-center gap-2'>
                <h2 className='text-mv-white text-sm font-bold'>Sign in</h2>
                <MenuICon />
            </div>
        </nav>

        <main className='absolute top-0 left-0 bottom-0 w-full h-full flex items-center justify-start px-4 md:px-24' style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "contain",
            backgroundPosition : "center center",
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${base_url}${!isMonitor ? (movie?.backdrop_path && movie?.backdrop_path) : (movie?.poster_path && movie?.poster_path) })`
        }}>
            <section className='w-[404px] space-y-4'>
                <h2 className='text-mv-white text-3xl sm:text-5xl font-bold'>{movie?.original_title || movie?.name || movie?.original_name}</h2>
                <div className='flex items-center space-x-8 font-normal'>
                    <div className='flex items-center space-x-2'>
                        <Imdb />
                        <span className='text-mv-white'>86.0 / 100</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Tomato />
                        <span className='text-mv-white'>97%</span>
                    </div>
                </div>
                <p className='text-mv-white text-xs sm:text-sm font-normal'>{movie?.overview}</p>
                <Button children='Watch Trailer' imgBefore={<Icon.PlayCircle style={{
                    color: 'white'
                }}/>} bgColor = 'bg-mv-mainred' rounded weight= 'font-bold' />
            </section>
        </main>

    </div>
  )
}

export default Hero