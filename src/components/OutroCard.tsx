import React from 'react';

function OutroCard() {
  return (
    <div>
      <div className='md:flex md:h-72 px-8 py-8 md:mb-8 mx-4 my-2 bg-white rounded-r rounded-l shadow-md'>
        <div className='my-auto mx-auto'>
          <div className='block '>
            <h1 className='text-3xl font-bold inline mr-2'>Phone:</h1>
            <span className='text-xl'>936-207-7381</span>
          </div>
          <div className='block'>
            <h1 className='text-3xl font-bold inline mr-2'>Email:</h1>
            <span className='text-xl break-words'>Khanraa@Gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutroCard;