import React from 'react';

function Card({ title, text, webLink, gitLink, img }) {
  return (
    <div className='mx-4 my-8 lg:my-2 bg-white rounded shadow-md'>
      <div className='h-80'>
        <a href={webLink}>
          <img className='w-full h-full rounded-t cursor-pointer' src={img} alt="Picture for Website" />
        </a>
      </div>
      <div className='px-2'>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p className=''>{text}<span className=''>{' (Click image for website demo)'}</span></p>
        <div className='flex'>
          <button className='bg-sky-500/50 hover:bg-sky-500/20 px-8 py-2 rounded text-center mx-auto my-4'><a href={gitLink}>Code {'/>'}</a></button>
        </div>
      </div>
    </div>
  );
}

export default Card;