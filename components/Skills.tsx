import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as Skills } from '../typing'

type Props = {
  skills: Skills[]
}

export default function Skills ({skills}: Props) {
  return (
    <motion.div
    initial={{  opacity: 0, }}
    whileInView={{  opacity: 1,}}
    transition={{duration: 1.5,}} 
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 md:top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-36 md:top-28 uppercase tracking-[2px] text-gray-500 text-sm'>Tools and Technologies I&apos;ve worked with</h3>


        <div className='grid grid-cols-7 gap-3 absolute md:top-40 my-auto'>
          {skills.slice(0, skills.length / 2).map((skill) => {
            return(
              <Skill key={skill._id} skill={skill} />
            )
          })}

          {skills.slice(skills.length / 2, skills.length).map((skill) => {
            return(
              <Skill key={skill._id} skill={skill} directionLeft/>
            )
          })}

    
        </div>
    </motion.div>
  )
}

