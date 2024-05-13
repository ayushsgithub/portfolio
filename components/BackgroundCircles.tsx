import React from 'react'
import { motion } from 'framer-motion';


type Props = {

}

export default function BackgroundCircles ( props: Props)  {
  return (
    <motion.div 
    initial={{  opacity: 0, scale:0.4}}
    animate={{  opacity: 1, scale: 1}}
    transition={{duration: 1.3}}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52'/>
        <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52'/>
        <div className='absolute border border-[#F7AB0A] rounded-full h-[650px] w-[650px] mt-52 animate-pulse'/>
        {/* <div className='absolute border border-[#f7790ab7] rounded-full h-[650px] w-[650px] mt-52 animate-pulse'/> */}
        <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52'/>
    </motion.div>
  )
}

