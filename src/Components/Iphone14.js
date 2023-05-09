import React from 'react'

const Iphone14 = () => {
  return (
    <>
      <a href="">
        <div className={` bg-[url('/Iphone_14_Phone.jpg')] md:bg-[url('/Iphone_14_md.jpg')] bg-no-repeat bg-center bg-cover h-[32rem]`}>
          <div className=' pt-8 text-center'>
            <h1 className=' font-bold text-5xl text-center'>Iphone 14</h1>
            <h1 className=' text-3xl mt-2'>Two great sizes. </h1>
            <h1 className=' text-3xl mt-2'>Now with splash of yellow</h1>
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

export default Iphone14