import React from 'react'
import { useRouter } from "next/router";


const NavBar = () => {
  
  const router = useRouter()
  
  function routerPushS () {
  }
  function routerPushA () {
    router.push("/about")
  }
    function routerPushP () {
    router.push("/proyects")
  }
  function routerPushC () {
    router.push("/contact")
  }
  
  
  return (
    <div className='bg-slate-50 h-14'>
      <div className='flex h-full justify-between'>
        <div className=' flex items-center pl-4 font-hind'>
          <span>IVO MAYDANA</span>
        </div>
          <div className='flex items-center'>
            <span className='px-2 font-hind' onClick={routerPushA}>About Me</span>
            <span className='px-2 font-hind'>Skills</span>
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