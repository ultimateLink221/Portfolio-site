import React from 'react';

function IntroCard() {
  return (
    <div className='md:flex md:h-72 px-2 py-8 lg:px-0 lg:py-0 mx-4 my-2 bg-white rounded-r rounded-l shadow-md'>
      <div className='my-auto mx-auto text-center'>
        <h1 className='text-3xl font-bold pb-2 lg:pb-0'>Hi Welcome to my Website!</h1>
        <p className='text-lg'>Feel free to check out my projects down below.</p>
      </div>
    </div>
  );
}

export default IntroCard;