import React from 'react'

const Iwatch = () => {
  return (
    <div>
        <>
      <a href="">
        <div className={` bg-[url('/hero_apple_watch_phone.jpg')] md:bg-[url('/hero_apple_watch_md.jpg')] bg-no-repeat bg-center bg-cover h-[32rem] text-white`}>
          <div className=' pt-8 text-center'>
            <h1 className=' font-bold text-4xl text-center'> <i className='bi bi-apple'/>Watch</h1>
            <h1 className=' text-2xl mt-1 text-red-800'>SERIES 8 </h1>
            <h1 className=' text-3xl mt-1'>A healthy leap ahead.</h1>
          </div>
          <div className='flex justify-center mt-1'>
            <a href="#" className=' text-2xl mr-8 text-blue-600 hover:underline'>Learn More</a>
            <a href="#" className='text-2xl text-blue-600 hover:underline'>Buy</a>
          </div>
        </div>
      </a>
    </>
    </div>
  )
}

export default Iwatch;