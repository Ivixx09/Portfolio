import React from 'react'
import {easeInOut, motion} from "framer-motion" 

const PrincipalPage = () => {
  return (
    <div style={{height:"60vw"}}  className='bg-slate-50 grid grid-cols-1 gap-4 content-center'>
      <div className='flex justify-center py-5'>
        <motion.span
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          type: "spring"
        }} 
        initial={{scale: 0}}
        animate={{scale: 1}}
        className='font-hind text-2xl lg:text-7xl md:text-6xl sm:text-3xl'>
          Hi! i am Ivo Maydana
        </motion.span>
        <motion.img         
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            type: "spring"
          }}
          src="./1F44B.svg" className='sm:w-10 sm:h-10 md:w-16 md:h-16 lg:h-20 lg:w-20 w-10 h-10' alt="" />
      </div>
      <div className='flex justify-center py-5'>
        <motion.span
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            type: "spring"
          }} 
          initial={{scale: 0}}
          animate={{scale: 1}}
          className='font-hind text-2xl lg:text-7xl md:text-6xl sm:text-3xl '>
          A FullStack web developer
        </motion.span>
        <motion.img
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              type: "spring"
            }}
          initial={{scale: 0}}
          animate={{scale: 1}}
          src="./1F4BB.svg" className='sm:w-10 sm:h-10 md:w-16 md:h-16 lg:h-20 lg:w-20 w-10 h-10 ' alt="" />
      </div>
    </div>
  )
}

export default PrincipalPage