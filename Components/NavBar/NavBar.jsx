import React from 'react'
import { useRouter } from "next/router";


const NavBar = ({nav, setNav}) => {

  const handleNav = () => {
    setNav(!nav)
  }
  
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
    <div className='fixed w-full bg-slate-200 h-14'>
      <div className='flex h-full justify-between'>
        <div onClick={handleNav} className="lg:hidden md:hidden flex items-center">
            {/* MENU */}
            <svg className="w-8 h-8 cursor-pointer" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </div>
        <div className=' flex items-center pl-4 font-hind'>
          <span className='cursor-pointer text-lg font-custom'>IVO MAYDANA</span>
        </div>
          <div className='hidden md:flex md:items-center '>
            <span className='px-2 font-custom cursor-pointer' onClick={routerPushA}>ABOUT ME</span>
            <span className='px-2 font-custom cursor-pointer'>SKILLS</span>
            <span className='px-2 font-custom cursor-pointer'>PROYECTS</span>
            <span className='px-2 font-custom cursor-pointer'>CONTACT ME</span>
          </div>
          <div className=' flex justify-end pr-4'>
            <img className='h-full w-full rounded-full' src="./yo.jpg" alt="" />
          </div>
      </div>
    </div>
  )
}

export default NavBar