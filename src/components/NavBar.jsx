import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RKResume from '../assets/Raafay_Khan_Resume.PDF'

function NavBar(props) {
  const nav = useNavigate();

  const [mainNavItem, setMainNavItem] = useState('text-xl hidden md:inline font-bold md:ml-2 rounded px-4 py-2');
  const [navItems, setNavItems] = useState('text-xl hidden md:inline hover:bg-slate-200 rounded px-4 md:py-2');
  const [btnClasses, setBtn] = useState('hidden md:inline my-2 md:my-0 md:h-auto');

  const handleToggle = () => {
    const classMainNavItem = 'text-xl hidden md:inline font-bold md:ml-2 rounded px-4 py-2';
    const classNavItems = 'text-xl hidden md:inline hover:bg-slate-200 rounded px-4 md:py-2';
    const classBtn = 'hidden md:inline my-2 md:my-0 md:h-auto'

    if (mainNavItem === classMainNavItem) {
      setMainNavItem('text-xl md:inline hover:bg-slate-200 block md:hover:bg-white md:font-bold md:ml-2 rounded mt-1 md:mt-0 py-1 px-4 md:py-2');
    }
    else {
      setMainNavItem(classMainNavItem);
    }

    if (navItems === classNavItems) {
      setNavItems('text-xl md:inline hover:bg-slate-200 block rounded px-4 py-1 md:py-2');
    }
    else {
      setNavItems(classNavItems);
    }

    if (btnClasses === classBtn) {
      setBtn('md:inline my-4 md:my-0 md:h-auto');
    }
    else {
      setBtn(classBtn);
    }

  };

  const handleFindContact = () => {
    console.log(window.location.href)
    if (window.location.href === 'http://localhost:3000/') {
      window.scrollTo({top: document.body.scrollHeight, left: 0, behavior: "smooth"});

    }
    else {
      nav('/');
      setTimeout(() => {
        window.scrollTo({top: document.body.scrollHeight, left: 0, behavior: "smooth"});
      }, 200)
    }
  }

  return (
    <nav className='md:flex bg-white p-4 py-4 md:justify-between mb-8 '>
      <span onClick={handleToggle} className='md:hidden cursor-pointer px-4'>
        <i className="fa-solid fa-bars"></i>
      </span>
      <ul className='md:flex'>
        <li>
          <a className={mainNavItem} href='/'>
            <span>Raafay Khan</span>
          </a>
        </li>
        <li>
          <a onClick={handleFindContact} className={navItems}>
            <span>Contact</span>
          </a>
        </li>
        <li>
          <a className={navItems} href='/about'>
            <span>About</span>
          </a>
        </li>
      </ul>
      <div className={btnClasses}>
        <a className='text-xl mx-2 bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-500 hover:to-sky-600 rounded px-4 py-2' href={RKResume}>
          <span>Resume</span>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;