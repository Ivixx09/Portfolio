import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-slate-200 h-14'>
      <div className='flex h-full'>
        <div className='basis-1/2 flex items-center'>
          <span>IVO MAYDANA</span>
        </div>
          <div className='flex items-center basis-3/4'>
            <span className='px-2'>Skills</span>
            <span className='px-2'>About me</span>
            <span className='px-2'>Proyects</span>
            <span className='px-2'>Contact me</span>
          </div>
          <div className='basis-1/4 flex justify-end sm:pl-22 md:pl-22'>
            <img className='h-full w-full rounded-full' src="./yo.jpg" alt="" />
          </div>
      </div>
    </div>
  )
}

export default NavBar