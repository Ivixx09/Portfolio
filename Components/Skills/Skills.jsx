import React from 'react'
import {motion} from "framer-motion"

const Skills = () => {

  const duration = 0.25 

  const imgs = ["./icons8-css3.svg",
  "./icons8-html-5.svg",
  "./icons8-javascript.svg",
  "./icons8-sql-60.png",
  "./icons8-typescript.svg",
  "./prismaHD.png",
  "./React-icon.svg.png",
  "./next-js.svg",
  "./Tailwind_CSS_Logo.svg.png"]

  return (
    <div style={{height:"100vw"}} className="h-screen bg-slate-200">
      <div className=' pb-12 sm:pb-20 md:pb-32 lg:pb-32'>
        <h2 className='text-lg sm:text-2xl md:text-5xl font-custom lg:text-5xl grid justify-items-center '>
          I know the following technologies
        </h2>
      </div>
      <div className='pl-[5%] grid grid-cols-4 content-center'>
        {imgs.map((e, i) => {
          return <motion.img
          initial = {{
          scale: 0
          }}
          whileInView = {{
              scale: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: ((i+1)) * duration
              
            }
          }}
          viewport={{ once: true }}
          // animate= {{
          //   y:0
          // }}
          // transition={{
          //   duration: ((i + 1)) * duration  
          // }}
          src={e} alt="photo icon" className='sm:h-12 sm:w-12 h-12 w-12 md:h-32 md:w-32 lg:h-32 lg:w-32' />
        })}
      </div>
    </div>
  )
}

export default Skills
{/* <a target="_blank" href="https://icons8.com/icon/21278/css3">All</a> icons by <a target="_blank" href="https://icons8.com">Icons8</a> */}