import React from 'react'

type Props = {
    company: string;
    start: string;
    end: string;
    skills: string[];
    points: string[];
    role: string;
}

const ExperienceCard = ({company, start, end, points, skills, role}: Props) => {
  return (
    <article className='flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden h-1/2 justify-center'>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light tracking-wider'>{role}</h4>
            <p className='font-bold text-2xl mt-3 tracking-wider'>{company}</p>
            <div className='flex space-x-2 my-3 overflow-hidden '>
                {skills.map((skill, index) => (<img key={index} className='h-10 w-10 rounded-full' src={`/skillPhoto/${skill}`} alt="skill" />))}
            </div>
            <p className='uppercase py-5 text-gray-300 italic font-mono'>{end ? "From " + start + " To " + end : start}</p>

            {/* <ul className='list-disc space-y-4 ml-5 text-lg h-96 pr-7 overflow-y-auto scrollbar-thin scrollbar-track-black/25 scrollbar-thumb-[#F7AB0A]'>
                {points.map((point, index) => (<li key={index}>{point}</li>))}
            </ul> */}
        </div>
    </article>
  )
}

export default ExperienceCard