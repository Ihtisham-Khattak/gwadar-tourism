import React from 'react'
import Gwadar1 from '../assets/gwadar5.jpg';
import Gwadar2 from '../assets/gwadar2.jpg';
import Gwadar3 from '../assets/gwadar3.jpg';
import Gwadar4 from '../assets/gwadar4.jfif';
import Gwadar6 from '../assets/gwadar6.jpg';
import Gwadar7  from '../assets/gwadar7.jpg';
import SelectesImage from './SelectesImage';



export const Selectes = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectesImage bg={Gwadar1} text={'Gwadar Deseart'}/>
    <SelectesImage bg={Gwadar2} text={'Engineering College Gwadar'}/>
    <SelectesImage bg={Gwadar3} text={'Labour Industry'}/>
    <SelectesImage bg={Gwadar4} text={'Gwadar PC Hotel'}/>
    <SelectesImage bg={Gwadar6} text={'Gwadar Beach'}/>
    <SelectesImage bg={Gwadar7} text={'Gwadar Dream City'}/>

     
    </div>
  )
}
