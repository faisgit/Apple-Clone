import React from 'react'

const Cards = () => {
  return (
    <div className='grid gird-cols-3 md:grid-cols-2 gap-3 mx-0 md:mx-3 mt-2'>
      <div className={` bg-[url('/promo/promo_wwdc23_md.jpg')] xl:bg-[url('/promo/promo_wwdc23_large.jpg')] h-[30rem] bg-no-repeat bg-center bg-cover text-white flex flex-col justify-center items-center pt-56`}>
        <img src="/Logo/promo_logo.png" className='h-8' alt="" />
        <h1 className='pt-3 text-xl' >Apple Worldwide Developer</h1>
        <h1 className='text-xl'>Conference.Join us online</h1>
        <h1 className='text-xl' >June 5-9.</h1>

        <a href="#" className=' text-2xl mr-8 text-blue-600 hover:underline'>Learn More</a>

      </div>

      <div className={`bg-[url('/Ipad/ipad_md.jpg')] xl:bg-[url('/Ipad/ipad_lg.jpg')] h-[30rem] bg-no-repeat bg-center bg-cover`}>
        <div className=' pt-8 text-center'>
          <h1 className=' font-bold text-4xl'>Ipad</h1>
          <h1 className=' text-2xl mt-1'>Lovely. Drawable. Magical.</h1>
        </div>
        <div className='flex justify-center mt-1'>
          <a href="#" className=' text-2xl mr-8 text-blue-600 hover:underline'>Learn More</a>
          <a href="#" className='text-2xl text-blue-600 hover:underline'>Buy</a>
        </div>
      </div>

      <div className={`bg-[url('/Macbook/macbook_md.jpg')] xl:bg-[url('/Macbook/macbook_lg.jpg')] h-[30rem] bg-no-repeat bg-center bg-cover`}>
      <div className=' pt-8 text-center text-white'>
          <h1 className=' font-bold text-4xl'>Macbook Pro</h1>
          <h1 className=' text-2xl mt-1'>Supercharged by M2 Pro and M2 Max.</h1>
        </div>
        <div className='flex justify-center mt-1'>
          <a href="#" className=' text-2xl mr-8 text-blue-600 hover:underline'>Learn More</a>
          <a href="#" className='text-2xl text-blue-600 hover:underline'>Buy</a>
        </div>
      </div>

      <div className={`bg-[url('/Homepod/homepod_m.jpg')] xl:bg-[url('/Homepod/homepod_lg.jpg')] h-[30rem] bg-no-repeat bg-center bg-cover text-white`}>
      <div className=' pt-8 text-center'>
          <h1 className=' font-bold text-4xl'>HomePod</h1>
          <h1 className=' text-2xl mt-1'>Profound sound</h1>
        </div>
        <div className='flex justify-center mt-1'>
          <a href="#" className=' text-2xl mr-8 text-blue-600 hover:underline'>Learn More</a>
          <a href="#" className='text-2xl text-blue-600 hover:underline'>Buy</a>
        </div>
      </div>

      <div className={`bg-[url('/Airpods/Airpods_md.jpg')] xl:bg-[url('/Airpods/Airpods_lg.jpg')] h-[30rem] bg-no-repeat bg-center bg-cover text-white`}>
         <div className=' pt-8 text-center'>
          <h1 className=' font-bold text-4xl'>AirPods Pro</h1>
          <h1 className=' text-2xl mt-1'>Up to 2x more</h1>
          <h1 className=' text-2xl mt-0'>Active Noise Cancellation.<sup className='text-sm'>2</sup></h1>
        </div>
        <div className='flex justify-center mt-1'>
          <a href="#" className=' text-2xl mr-8  hover:underline'>Learn More</a>
          <a href="#" className='text-2xl  hover:underline'>Buy</a>
        </div>
      </div>

      <div className={`bg-[url('/Apple_Card/Apple_Card_md.jpg')] xl:bg-[url('/Apple_Card/Apple_Card_lg.jpg')] h-[30rem] bg-no-repeat bg-center bg-cover`}>
      <div className=' pt-8 text-center'>
          <h1 className=' font-bold text-4xl'> <i className='bi bi-apple'></i>Card </h1>
          <h1 className=' text-2xl mt-1'>Get up to 3% Daily Cashback</h1>
          <h1 className=' text-2xl mt-0'>with every purchase</h1>
        </div>
        <div className='flex justify-center mt-1'>
          <a href="#" className=' text-2xl mr-8  hover:underline text-blue-600'>Learn More</a>
          <a href="#" className='text-2xl  hover:underline text-blue-600'>Buy</a>
        </div>
      </div>
    </div>
  )
}

export default Cards