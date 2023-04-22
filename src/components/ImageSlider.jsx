import React, { useState } from 'react'
import {BsChevronCompactLeft}  from 'react-icons/bs'
import {BsChevronCompactRight}  from 'react-icons/bs'

function ImageSlider() {

    const slides = [
        {
            url: 'https://images.pexels.com/photos/7364105/pexels-photo-7364105.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Lobster',
        },

        {
            url: 'https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Sushi',
        },

        {
            url: 'https://media.istockphoto.com/id/1144823591/photo/spaghetti-in-a-dish-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=yWXnUB0TbGVWD5NE-dbu33KzQ_ujPXWQtU7809AUwxE=',
            title: 'Pasta',
        },

        {
            url: 'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Salmon',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)
    
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        
    }
  return (
    <div className='max-width-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
        <div className='w-full h-full bg-cover duration-500 bg-center rounded-2xl ' style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
        </div>

        {/* Left Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>


        {/* Right Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        
    </div>
  )
}

export default ImageSlider