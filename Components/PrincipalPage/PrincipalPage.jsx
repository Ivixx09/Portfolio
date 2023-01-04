import React from 'react'

const PrincipalPage = () => {
  return (
    <div style={{height:"60vw"}}  className='bg-slate-50 grid grid-cols-1 gap-4 content-center'>
      <div className='flex justify-center py-5'>
        <span className='font-hind text-2xl lg:text-7xl md:text-6xl sm:text-3xl'>
          Hi! i am Ivo Maydana
        </span>
        <img src="./1F44B.svg" className='sm:w-10 sm:h-10 md:w-16 md:h-16 lg:h-20 lg:w-20 w-10 h-10' alt="" />
      </div>
      <div className='flex justify-center py-5'>
        <span className='font-hind text-2xl lg:text-7xl md:text-6xl sm:text-3xl '>
          A FullStack web developer
        </span>
        <img src="./1F4BB.svg" className='sm:w-10 sm:h-10 md:w-16 md:h-16 lg:h-20 lg:w-20 w-10 h-10 ' alt="" />
      </div>
    </div>
  )
}

export default PrincipalPage