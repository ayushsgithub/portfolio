import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typing'
import { urlFor } from '@component/sanity'

type Props = {
  pageInfo: PageInfo
}

export default function About ({pageInfo}: Props)  {
  return (
    <motion.div
        initial={{ x: -200, opacity: 0, }}
        whileInView={{ x: 0, opacity: 1,}}
        transition={{duration: 1.2,}} 
        className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img 
        initial={{ x: -200, opacity: 0,}}
        whileInView={{ x: 0, opacity: 1,}}
        transition={{duration: 1.2,}}
        className='-mb-20 md:mb-0 mt-10 md:mt-0 flex-shrink-0 md:rounded-lg md:w-56 md:h-72 w-48 h-48 object-cover rounded-full' src={urlFor(pageInfo.profilePic).url()} alt='/'/>

        <div className='space-y-4 md:space-y-10 px-0 md:px-10'>
            <h4 className='text-2xl md:text-4xl font-semibold'>Here&apos;s a <span className='underline underline-offset-2 decoration-[#e6cf74]/90'>little</span> background</h4>
            <p className='text-base'>{pageInfo.backgroundInformation}</p>
        </div>
    </motion.div>
  )
}

