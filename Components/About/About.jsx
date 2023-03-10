import React from 'react'
import { motion} from "framer-motion" 

const About = () => {
  return (
    <div className="h-screen bg-black " >
      <div className='pt-6'>
        <div>
          <h1 className='text-4xl font-custom text-slate-100 flex justify-center '>About me :)</h1>
        </div>
        <div className='grid grid-cols-2 pt-8'>
          <div className='pl-6'>
            <div className=' h-[50%] w-[50%] ml-20'>
              <img src="./my-photo.jpg" alt="My photo" className='h-full w-full rounded-lg' />
            </div>
            <div className='pt-10'>
                <span className='font-custom text-xl font-semibold text-white'>
                I'm dedicated on my work, and responsable with everything i have to do. I like organization and team work.
                <br />
                With my proactivity i face any adversity and start any challenge that could make me 
                grow.
              </span>
            </div>
          </div>
          <div>
            <div>
              <span className='font-custom text-xl font-semibold text-white'>
                  I live in Argentina
                  and i started my study on <a href="https://www.soyhenry.com/">Henry</a> in March 2022
                <br />
                  After that I did a few projects. I worked on E-commerces, Newspapers, and other things.
                <br />
                I'm a curious person, who wants challenges and learn news tecnologies. 
                <br />
                </span>
            </div>
            <div className=' h-[50%] w-[50%] pt-14 ml-24 ' >
              <img src="./Resiliencia.jpg" alt="Photo rock" className='h-full w-full rounded-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About


{/* <div className='flex justify-center px-5'>
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 2 }}
  transition={{
    duration: 1.2
  }}
  viewport={{ once: true }} 
  className='px-5 py-5 mx-5 shadow-lg shadow-cyan-500/50 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 sm:w-1/2 md:w-1/4 w-1/2'>
  <span className='font-custom text-xl font-semibold'>
      I live in Argentina
      and i started my study on <a href="https://www.soyhenry.com/">Henry</a> in March 2022
    <br />
      After that I did a few projects. I worked on E-commerces, Newspapers, and other things.
    <br />
  </span>
</motion.div>
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 2 }}
  transition={{
    duration: 1.2
  }}
  viewport={{ once: true }}
  className='px-5 py-5 mx-5 shadow-lg shadow-cyan-500/50 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 sm:w-1/2 md:w-1/4 w-1/2'>
  <span className='font-custom text-xl font-semibold'>
    I'm a curious person, who wants challenges and learn news tecnologies. 
    <br />
    I'm dedicated on my work, and responsable with everything i have to do. I like organization
    <br />
    and team work.
    <br />
    With my proactivity i face any adversity and start any challenge that could make me 
    grow.
  </span>
</motion.div>
</div> */}