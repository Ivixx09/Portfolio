import React from 'react'

const Projects = () => {
  return (
    <div style={{height:"100vw"}} className="bg-slate-50 grid content-center">
      <div>
        <span className='grid justify-items-center'>
          <h1 className='text-lg sm:text-2xl md:text-5xl lg:text-5xl'>
            My recent proyects
          </h1>
        </span>
      </div>
          <div className=' relative inline-block h-auto w-2/3 pointer'>
            <img src="./NFTrade.png" className='focus:text-black h-4/5 w-4/5' alt="NFTrade image" />
              <div className=' absolute top-[40%] left-[80px] right-[200px] bottom-[40%]'>
                <span className='hidden text-white text-xl'>
                  NFTrade it's a proyect dedicated on visualization, purchase, sale and reviews
                  of NFT's it has an integrate coin (whitout blockchain). I had the backend role in it.
                </span>
              </div>
          </div>
    </div>
  )
}

export default Projects