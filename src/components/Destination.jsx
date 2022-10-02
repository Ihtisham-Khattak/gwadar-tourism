import React from 'react'
import Destination1 from '../assets/beachH.jpg'
import Destination2 from '../assets/beach1.jpg'
import Destination3 from '../assets/beach2.jpg'
import Destination4 from '../assets/beach3.jpg'
import Destination6 from '../assets/beach5.jpg'


export const Destination = () => {
  return (
    <div className='max-w-[1240px] m-auto py-16 px-4'>
        <h1 className='py-2'>Zaver PEARL CONTINENTAL</h1>
        <p className='flex justify-center items-center gap-2 p-1'> On the <h1>Gawadar.</h1> best spot</p>

        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-[300px] object-cover col-span-2 md:col-span-3 row-span-2' src={Destination1} alt='destination'/>
            <img className='w-full h-full object-cover' src={Destination2} alt='destination'/>
            <img className='w-full h-full object-cover' src={Destination3} alt='destination'/>
            <img className='w-full h-full object-cover' src={Destination4} alt='destination'/>
            <img className='w-full h-full object-cover' src={Destination6} alt='destination'/>

        </div>
    </div>
  )
}
