import React from 'react';

function About(props) {
  const description = `Passioante developer who loves learning new about new technolgies and enjoy's pushing his creative limits! I've always had a interest for technology. Ever since I was young I would love to look into different types software related things, tech and just whatever was near me. I remember specifically phones I looked a lot into once I dicovered that that was a thing. I remeber spending countless hours searching through the web and browsing youtube to learn more about theses things. I spent lots of time comparing all the different phones trying to figure out which ones were better, what advantages and disatvantages certain ones had over others, and just what each individual component (camera pixels, things relate to performace like CPU, Battery, etc.) meant (at least as much as I could for my age) and how that would effect my experience with the product. Once I got the phone I wanted to make it my own at least as much as I could. and all the things you could do with them. Throughout the phones i've had over the years i've always loved to tweak and them as much as I could without going over the limits (because I mean phones are expensive) and just make the experience unique to me as much as possible. I remember jailbreaking an iphone I had because I thought that was cool and was excited to push the limits of my iphone and wanted to just make it better at least in my eyes. I also remember learning about widgets and apps and I thought it would be cool to build an app one day. I have had a lot of interests throughout my life and have always loved learning new things. I struggled to find the one to stick with for a while but now this is the one I have decided to pursue. `;

  return (
    <div className='container min-h-screen mx-auto lg:px-40 px-5 md:py-10'>
      <div className='flex mx-2 my-2 bg-white rounded-r rounded-l shadow-md'>
        <div className='my-auto mx-auto text-center'>
          <h1 className='text-3xl font-bold py-10'>Hi I am Raafay Khan!</h1>
          <p className='text-lg px-10 sm:px-20 pb-20'>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default About;