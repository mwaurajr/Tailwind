import React from 'react'

function Rooms() {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 lg:mb-[20%] px-4 grid lg:grid grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
            <p className='pt-4'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, repudiandae!
             Quia officiis facere accusamus culpa.
             </p>
        </div>
        <div className=' grid grid-cols-2 cols-span-2 gap-2 ' >
            <img className='object-cover w-full h-full' src='https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
            <img className='row-span-2 object-cover w-full h-full' src='https://images.pexels.com/photos/3225561/pexels-photo-3225561.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
            <img className='object-cover w-full h-full' src='https://media.istockphoto.com/id/149082096/photo/beautiful-seascape.jpg?b=1&s=612x612&w=0&k=20&c=EsDFCck-vw0D36-lBVBkJ4Hv1JV8SeAh6RTDBo_8MoY=' alt='/'/>
        </div>
    </div>
  )
}

export default Rooms