import React from 'react'
import Button from '../components/forms/button'
import Input from '../components/forms/input'
import * as Icon from 'react-feather'
import banner from '../components/assets/images/banner.svg'
import { Tomato, Imdb, Tv } from '../components/assets/icons/generated'
import { useGetMoviesQuery } from '../Api/apiSlice'

const Hero = () => {

    const { data } = useGetMoviesQuery()
    console.log(data)

  return (
    <div className=' px-24 pt-[15px] h-[600px] p-4 relative'>
        <nav className='flex items-center justify-between py-2 absolute left-0 right-0 top-0 px-24 pt-6 z-10'>
            <div className='flex items-center space-x-4'>
                <Tv />
                <h2 className='text-mv-white text-2xl font-bold'>Movix</h2>
            </div>
            <div className='w-2/4'>
                <Input rightIcon={<Icon.Search style={{color: 'white'}} />} />
            </div>
            <div>
                <h2 className='text-mv-white text-base font-bold'>Hi, Noah Ogunderu</h2>
            </div>
        </nav>

        <main className='absolute top-0 left-0 bottom-0 w-full h-full flex items-center justify-start px-24' style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "contain",
            backgroundPosition : "center center",
            backgroundImage: `url(${banner})`
        }}>
            <section className='w-[404px] space-y-4'>
                <h2 className='text-mv-white text-5xl font-bold'>John Wick 3 : Parabellum</h2>
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
                <p className='text-mv-white text-sm font-normal'>
                    John Wick is on the run after killing a member of the international assassins' guild,
                    and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                </p>
                <Button children='Watch Trailer' imgBefore={<Icon.PlayCircle style={{
                    color: 'white'
                }}/>} bgColor = 'bg-mv-mainred' rounded weight= 'font-bold' />
            </section>
        </main>

    </div>
  )
}

export default Hero