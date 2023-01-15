import React from 'react'
import { FaceBook, Insta, Twitter, Youtube } from '../components/assets/icons/generated'

const Footer = () => {
  return (
    <footer className='p-11 px-24 flex items-center justify-center flex items-center flex-col space-y-9'>
        <div className='flex items-center space-x-12'>
            <FaceBook />
            <Insta />
            <Twitter />
            <Youtube />
        </div>
        <section className='flex items-center space-x-12'>
            <span className='font-bold text-lg'>Conditions of Use</span>
            <span className='font-bold text-lg'>Privacy & Policy</span>
            <span className='font-bold text-lg'>Press Room</span>
        </section>
        <p className='text-mv-gray font-bold'>© 2021 Movix</p>
    </footer>
  )
}

export default Footer