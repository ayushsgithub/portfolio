import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";


type Props = {
}
type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

export default function ContactMe  (props : Props)  {

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => (window.location.href = `mailto:ayushchaurasiya78@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`)


  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 md:top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
        <div className='flex flex-col space-y-7 md:space-y-5 md:mt-[60px]'>
          <h4 className='text-3xl font-semibold text-center'>I have got just what you need. <span className='underline decoration-yellow-200'>Let&apos;s Talk</span></h4>

          <div className='space-y-5 md:space-y-3'>
            
            <div className='flex items-center space-x-5 justify-center'>
              <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
              <p className='text-xl'>+918804772137</p>
            </div>
            
            <div className='flex items-center space-x-5 justify-center'>
              <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
              <p className='text-xl'>ayushchaurasiya78@gmail.com</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
              <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
              <p className='text-xl'>Main Road Dumraon, India</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
              <div className='flex md:space-x-2 flex-col space-y-2 w-fit md:space-y-0 md:flex-row '>
                <input {...register("name")} placeholder='Name' className='contactInput' type="text" />
                <input {...register("email")} placeholder='Email' className='contactInput' type="email" />
              </div>
              <input {...register("subject")} placeholder='Subject' className='contactInput' type="text" />
              <textarea {...register("message")} placeholder='Message' className='contactInput'/>
              <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>Submit</button>
            </form>
          </div>

        </div>
        
    </div>
  )
}
