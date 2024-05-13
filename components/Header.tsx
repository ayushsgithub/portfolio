import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


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
        <Link href={"https://leetcode.com/u/ayushchaurasiya78/"} target='_blank' className='hover:-translate-y-1 ease-in duration-100'><Image src='/skillPhoto/leetcode.png' width={35} height={35} alt='logo' /></Link>
        </motion.div>

        <motion.div 
        initial={{ x: 500, opacity: 0, scale: 0.2}}
        animate={{ x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.2,}}
        className='flex flex-row items-center text-gray-300 '>
            <SocialIcon className='hover:-translate-y-1 ease-in duration-100 cursor-pointer' target='_blank' url='mailto:ayushchaurasiya78@gmail.com' network='mailto' fgColor='#D3D3D3' bgColor='transparent'/>
            <p className='uppercase hidden md:inline-flex text-sm text-#D3D3D3'>Get In Touch</p>
        </motion.div>
    </header>
  )
}

