import React from 'react';
import { RoadmapTechField } from '../../constants';

const Roadmaps = () => {
  return (
    <div className='Roadmaps pt-20 md:pt-32'>
      <div className='text-center'>
        <h1 className='text-5xl md:text-8xl text-violet-300'>Roadmaps</h1>
        <p className='md:text-2xl text-xs p-10 md:pb-8 pb-3 md:p-48 md:pt-2 pt-0 mt-6 text-white'>
          Before diving into learning computer science, it's essential to understand why you want to pursue it. Computer science has numerous applications, and here are some fields you can work in...
        </p>
      </div>

      <div className="card m-10 mt-0 md:m-24 md:mt-0 flex flex-wrap justify-center w-15 h-15">
        {RoadmapTechField.map((techfield, index) => (
          <div key={index} className='m-4 md:w-1/5 border-gray-100 border-2 text-white rounded-lg backdrop-filter backdrop-blur-lg'>
            <div className="flex flex-col h-full p-0 overflow-hidden">
              <h5 className='text-2xl m-5 mb-0 '>{techfield.field}</h5>
              <div className='mt-auto mb-5  flex-col justify-center '>
              <p className=' m-5 mb-0'>{techfield.Description}</p>
                <img src={techfield.img} alt={techfield.field} className='w-full h-full mt-0' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmaps;
