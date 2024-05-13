import React from 'react'
import { motion } from 'framer-motion'
import type { Skill } from '../typing'
import { urlFor } from "../sanity"

type Props = {
  directionLeft?: boolean
  skill: Skill
}

export default function Skill  ({directionLeft, skill }: Props)  {
  return (
    <div className='relative group flex cursor-pointer'>
        <motion.img
        initial={{ x: directionLeft ? -200: 200, opacity: 0, }}
        whileInView={{ x: 0, opacity: 1,}}
        transition={{duration: 1,}} 
        src={skill.image &&  urlFor(skill.image).url()} alt="/" 
        className='rounded-full border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-sm overflow-hidden font-bold text-black opacity-100 uppercase'>{skill.title}</p>
            </div>
        </div>
        
    </div>
  )
}

