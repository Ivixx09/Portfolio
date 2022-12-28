import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-slate-200 h-14'>
      <div className='flex h-full justify-between'>
        <div className=' flex items-center pl-4 font-hind'>
          <span>IVO MAYDANA</span>
        </div>
          <div className='flex items-center'>
            <span className='px-2 font-hind'>Skills</span>
            <span className='px-2 font-hind'>About me</span>
            <span className='px-2 font-hind'>Proyects</span>
            <span className='px-2 font-hind'>Contact me</span>
          </div>
          <div className=' flex justify-end pr-4'>
            <img className='h-full w-full rounded-full' src="./yo.jpg" alt="" />
          </div>
      </div>
    </div>
  )
}

export default NavBar