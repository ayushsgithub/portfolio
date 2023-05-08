import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';


type Props = {
}

export default function Header( props: Props) {

  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.2}}
        animate={{ x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.2,}}
        className='flex flex-row items-center'>
        <SocialIcon className='hover:-translate-y-1 ease-in duration-100' target='_blank' url="https://twitter.com/ayushisreal" network='twitter' fgColor='teal' bgColor='transparent' />
        <SocialIcon className='hover:-translate-y-1 ease-in duration-100' target='_blank' url="https://linkedin.com/in/ayushslink" network='linkedin' fgColor='lightblue' bgColor='transparent' />
        <SocialIcon className='hover:-translate-y-1 ease-in duration-100' target='_blank' url="https://github.com/ayushsgithub" network='github' fgColor='white' bgColor='transparent' />
        <SocialIcon className='hover:-translate-y-1 ease-in duration-100' target='_blank' url="https://t.me/8804772137" network='telegram' fgColor='white' bgColor='transparent' />
        </motion.div>

        <motion.div 
        initial={{ x: 500, opacity: 0, scale: 0.2}}
        animate={{ x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.2,}}
        className='flex flex-row items-center text-gray-300 '>
            <SocialIcon className='hover:-translate-y-1 ease-in duration-100 cursor-pointer' target='_blank' url='mailto:ayushchaurasiya78@gmail.com' network='mailto' fgColor='gray' bgColor='transparent'/>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </motion.div>
    </header>
  )
}

