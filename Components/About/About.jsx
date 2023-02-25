import React from 'react'
import { motion} from "framer-motion" 

const About = () => {
  return (
    <div style={{height:"100vw"}} className="bg-slate-50 grid content-center" >
      <div className='flex justify-center px-5'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 2 }}
          transition={{
            duration: 1.2
          }}
          viewport={{ once: true }} 
          className='px-5 py-5 mx-5 shadow-lg shadow-cyan-500/50 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 sm:w-1/2 md:w-1/4 w-1/2'>
          <span>
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
          <span>
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
      </div>
    </div>
  )
}

export default About