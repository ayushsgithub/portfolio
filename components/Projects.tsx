import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typing'
import { urlFor } from "../sanity"

type Props = {
    projects: Project[]
   
}

export default function Projects  ({projects}: Props)  {

  return (
    <motion.div 
    initial={{  opacity: 0, }}
    whileInView={{  opacity: 1,}}
    transition={{duration: 1.5,}} 
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 md:top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {projects?.map((project, i) => (
                <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center p-20 md:p-36 h-screen'>
                    <motion.img 
                    initial={{ y:-300, opacity: 0, }}
                    whileInView={{ y:0, opacity: 1,}}
                    transition={{duration: 1.2,}} 
                    viewport={{once: true}}
                    className='w-96 shadow-2xl md:pt-14' src={urlFor(project.image).url()} alt="/" />
                    <div className='space-y-4 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-3xl font-semibold text-center'>
                            <span >Case Study {i + 1} of {projects.length}:</span>{" "} <a className='underline decoration-yellow-200' target='_blank' href={project.linkToBuild}>{project?.title}</a></h4>
                            <div className='flex items-center space-x-2 justify-center'>
                                {project?.technologies.map((technologoy) => {
                                    return(
                                        <motion.img
                                        initial={{  opacity: 0, }}
                                        whileInView={{  opacity: 1,}}
                                        transition={{duration: 1,}}  
                                        key={technologoy._id} className='h-10 w-10' src={urlFor(technologoy.image).url()} alt="/" />
                                    )
                                })}
                            </div>
                        <p className='text-xl text-center md:text-left'>{project?.summary}</p>
                        
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12 ' />
    </motion.div>
  )
}

