import React from 'react'

const Iphone14pro = () => {
  return (
    <>
      <a href="">
        <div className={` h-[46rem] xl:h-[35rem]  bg-[url('/iphone_14_pro_mobile_tablet.jpg')] xl:bg-[url('/iphone_14_pro_desktop.jpg')] bg-no-repeat bg-center bg-cover text-white `}>
          <div className=' pt-8 text-center'>
          <h1 className=' font-bold text-5xl'>Iphone 14 Pro</h1>
          <h1 className=' text-3xl mt-2'>Pro. Beyond.</h1>
          </div>
          <div className='flex justify-center mt-2'>
            <a href="#" className=' text-2xl mr-8 text-blue-600 hover:underline'>Learn More</a>
            <a href="#" className='text-2xl text-blue-600 hover:underline'>Buy</a>
          </div>
        </div>
      </a>
    </>
  )
}

export default Iphone14pro