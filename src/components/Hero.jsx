import React from 'react'

function Hero() {
  return (
    <div className='w-full h-screen'>
      <img className=' top-0 left-0 w-full h-screen object-cover' src='https://images.pexels.com/photos/13772652/pexels-photo-13772652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/' />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen ' />
      <div className='absolute top-0 w-full h-full justify-center text-white flex flex-col '>
        <div className='md:left-[10%] max-w-[1100px] m-auto p-4 '>
          <p>All Inclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
          <p className='max-width-[600px] drop-shadow-2xl text-xl'>Discover the perfect beach getaway with our travel app. Explore pristine beaches around the world, from secluded coves to bustling boardwalks. Our app helps you find the perfect destination for your next vacation. And when you're not soaking up the sun, indulge in local cuisine at the best restaurants in town. From fresh seafood to exotic flavors, our app has it all. Start planning your next adventure today.</p>
        <button className='bg-white text-black'>Reserve Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero