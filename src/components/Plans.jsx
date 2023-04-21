import React from 'react'

function Plans() {
  return (
    <div>
        {/* leftside */}
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            <img className='' src='https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
            <img className='' src='https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
            <img className='' src='https://images.pexels.com/photos/175717/pexels-photo-175717.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
            <img className='' src='https://images.pexels.com/photos/3250362/pexels-photo-3250362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
            <img className='' src='https://images.pexels.com/photos/3556117/pexels-photo-3556117.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        </div>
        {/* Right side */}
        <div>
            <h3>PLan Your Next Trip</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, animi?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, tenetur? Hic molestiae corporis, quas autem tempore laboriosam ullam illo odio incidunt distinctio at numquam, ducimus, nobis modi ut consectetur. Itaque?</p>
        </div>

        <div>
            <button>Learn More</button>
            <button>Book Your Trip</button>
        </div>
    </div>
  )
}

export default Plans