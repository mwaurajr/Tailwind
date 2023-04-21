import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'

function Navbar() {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        if (!nav) {
            document.body.style.overflow = 'hidden'
        }
        else{
            document.body.style.overflow = 'scroll'
        }
    }
    return (
        <div className='flex justify-between absolute p-4 items-center w-full '>
            <h1 className='text-white z-20 font-bold text-2xl'>Experiences</h1>
            <HiMenuAlt3 size={25} className=' z-20 cursor-pointer text-white ' onClick={handleNav}/>
            <div className={nav ? ' ease-in duration-300 text-gray-300 fixed left-0 top-0 w-full h-screen bg-black/90 px-4 py-4 flex-col z-10' : 'absolute top-0 left-[-100%] ease-in duration-500 z-10'}>
                <ul className='flex flex-col fixed text-gray-300 w-full h-full items-center justify-center'>
                    <li className='text-3xl font-bold p-8'>Home</li>
                    <li className='text-3xl font-bold p-8'>Destinations</li>
                    <li className='text-3xl font-bold p-8'>Reservations</li>
                    <li className='text-3xl font-bold p-8'>Amenities</li>
                    <li className='text-3xl font-bold p-8'>Rooms</li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar