import React from 'react'

const Skills = () => {
  return (
    <div style={{height:"100vw"}} className="bg-slate-50">
      <div className=' pb-12 sm:pb-20 md:pb-32 lg:pb-32'>
        <h2 className='text-lg sm:text-2xl md:text-5xl lg:text-5xl grid justify-items-center '>
          I know the following technologies
        </h2>
      </div>
      <div className='grid content-center'>
        <div className='grid grid-cols-4 justify-items-center space-y-4' >
            <img src="./icons8-css3.svg" className='sm:h-12 sm:w-12 h-12 w-12 md:h-32 md:w-32 lg:h-32 lg:w-32 m-4' alt="" />
            <img src="./icons8-html-5.svg" className='sm:h-12 sm:w-12 h-12 w-12 md:h-32 md:w-32 lg:h-32 lg:w-32' alt="" />
            <img src="./icons8-javascript.svg" className='sm:h-12 sm:w-12 h-12 w-12 md:h-32 md:w-32 lg:h-32 lg:w-32' alt="" />
            <img src="./icons8-sql-60.png" className='sm:h-12 sm:w-12 h-12 w-12 md:h-32 md:w-32 lg:h-32 lg:w-32' alt="" />
            <img src="./icons8-typescript.svg" className='sm:h-12 sm:w-12 h-12 w-12 md:h-32 md:w-32 lg:h-32 lg:w-32' alt="" />
            <img src="./prismaHD.png" className='sm:h-12 sm:w-12 h-12 w-12 md:h-32 md:w-32 lg:h-32 lg:w-32' alt="" />
            <img src="./React-icon.svg.png" className='sm:h-12 sm:w-12 h-12 w-12 md:h-32 md:w-32 lg:h-32 lg:w-32' alt="" />
            <img src="./next-js.svg" className='sm:h-12 sm:w-12 h-12 w-12 md:h-32 md:w-32 lg:h-32 lg:w-32' alt="" />
            <img src="./Tailwind_CSS_Logo.svg.png" className='sm:h-12 sm:w-12 h-12 w-12 md:h-32 md:w-32 lg:h-32 lg:w-32' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Skills
{/* <a target="_blank" href="https://icons8.com/icon/21278/css3">All</a> icons by <a target="_blank" href="https://icons8.com">Icons8</a> */}