import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import experiences from './experiences.json'


type Props = {}

const Experience = ({}: Props) => {
return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
        <h3 className='absolute top-24 md:top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Experiences</h3>

        <div className='w-full flex space-x-5 h-full items-center relative z-20 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {experiences.experiences.map((experience) => (
            <ExperienceCard
                key={experience.id}
                company={experience.name}
                start={experience.date[0]}
                end={experience.date[1]}
                skills={experience.skills}
                points={experience.points}
                role={experience.role}
            />
        ))}
        </div>
    </motion.div>
)
}

export default Experience