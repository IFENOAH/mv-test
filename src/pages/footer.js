import React from 'react'
import { FaceBook, Insta, Twitter, Youtube } from '../components/assets/icons/generated'

const Footer = () => {
  return (
    <footer className='p-4 md:px-24 flex items-center justify-center flex-col gap-9'>
        <div className='flex items-center gap-12'>
            <FaceBook />
            <Insta />
            <Twitter />
            <Youtube />
        </div>
        <section className='w-full flex justify-center items-center gap-6'>
            <span className='font-bold text-sm md:text-lg'>Conditions of Use</span>
            <span className='font-bold text-sm md:text-lg'>Privacy & Policy</span>
            <span className='font-bold text-sm md:text-lg'>Press Room</span>
        </section>
        <p className='text-mv-gray font-bold'>© 2021 Movix</p>
    </footer>
  )
}

export default Footer