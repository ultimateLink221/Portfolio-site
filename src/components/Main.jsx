import React from 'react';
import Card from './Card';
import IntroCard from './IntroCard';
import OutroCard from './OutroCard';

function Main(props) {
  const data = [
    {
      id: 1,
      title: 'Social Media App',
      text: 'A fullstack application. Frontend built using React. Backend built using node.js with express and mongodb.',
      webLink: 'https://social-media-app-011.herokuapp.com/',
      gitLink: 'https://github.com/ultimateLink221/Social-Media-App',
      img: 'https://img.freepik.com/free-vector/social-media-logos-icons-set_69286-237.jpg?t=st=1656992915~exp=1656993515~hmac=ac8f0679ce687edd9b65e6553fbf5e4f6b5b05e84480ab60b04dc79c5898688b&w=1380'
    },
    {
      id: 2,
      title: 'Shopping App',
      text: 'Frontend application. Built using React with bootstrap. Fetching data from an amazon api avalible on RapidAPI.',
      webLink: 'https://shopping-app-011.herokuapp.com/',
      gitLink: 'https://github.com/ultimateLink221/Shopping-App',
      img: 'https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg?t=st=1656995912~exp=1656996512~hmac=fa49d58350780d978f414cd6692b59ac47fc6a6dd18cda47c5d8b04057d5667b&w=740'
    },
    {
      id: 3,
      title: 'Blog App',
      text: 'Mainly frontend application. Built using React, Next.js, and tailwindcss. Backend made with graphCMS.',
      webLink: 'https://blog-app-nine-rosy.vercel.app/',
      gitLink: 'https://github.com/ultimateLink221/Blog-App',
      img: 'https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?t=st=1656995955~exp=1656996555~hmac=ff9b51c7967465856445b6afa5f2dbb150751d2b0399e0fd3238d7f223bf9e1c&w=996'
    },
  ]

  return (
    <div className='container mx-auto md:px-20'>
      <IntroCard />
      <div className='block lg:grid lg:grid-cols-3 my-8'>
        {data.map(item => {
          return <Card key={item.id} title={item.title} text={item.text} webLink={item.webLink} gitLink={item.gitLink} img={item.img} />
        })}
      </div>
      <OutroCard />
    </div>
  );
}

export default Main;