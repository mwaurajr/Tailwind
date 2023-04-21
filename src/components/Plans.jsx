import React from 'react'

function Plans() {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* leftside */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-screen p-2 ' src='https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
            <img className='row-span-2 object-cover w-full h-screen p-2 ' src='https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
            <img className='row-span-2 object-cover w-full h-screen p-2 ' src='https://images.pexels.com/photos/175717/pexels-photo-175717.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
            <img className='row-span-3 object-cover w-full h-screen p-2 ' src='https://images.pexels.com/photos/3250362/pexels-photo-3250362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
            <img className='row-span-2 object-cover w-full h-screen p-2 ' src='https://images.pexels.com/photos/3556117/pexels-photo-3556117.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        </div>
        {/* Right side */}
        <div className='flex flex-col justify-center h-full'>
            <h3 className='text-5xl md:text-6xl font-bold'>PLan Your Next Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, animi?</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, tenetur? Hic molestiae corporis, quas autem tempore laboriosam ullam illo odio incidunt distinctio at numquam, ducimus, nobis modi ut consectetur. Itaque?</p>
            <div >
            <button className='border-black hover:shadow-xl mr-4'>Learn More</button>
            <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
        </div>

        </div>
    </div>
  )
}

export default Plans