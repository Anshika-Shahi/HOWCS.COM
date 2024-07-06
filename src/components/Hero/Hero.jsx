import React from 'react'
import { image1 } from '../../constants'


const Hero = () => {
  return (
    <div className='hero md:flex '>
      <div className='hero-left md:m-24 md:ml-48 m-16 mt-48 md:mt-64 md:w-1/3'>
        <div className=' text-white text-3xl  text-center  md:text-left  md:text-6xl'>
        <h1>Hey Learner!</h1>
        <h1>I am your tech <br/>guide.</h1>
        </div>
        <div className='md:mt-4 text-white text-xs md:text-xl m-4 md:m-0 text-center md:text-left'>
          A place where enthusiastic and curious learners can embark their technical journey. A placeform for the students to help and guide them into making things.
        </div>
      </div>
      <div className='hero-right md:mt-48 '>
          <div className="shadow heroimg ml-6 md:ml-0">
              <img src={image1} alt="" />
          </div>
      </div>
      
    </div>
  )
}


export default Hero
