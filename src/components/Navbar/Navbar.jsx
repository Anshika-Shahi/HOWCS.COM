import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  let Links = [
    { name: 'HOME', link: '/' },
    { name: 'RESOURCES', link: '/' },
    { name: 'ABOUT US', link: '/' },
    // { name: 'BLOGS', link: '/' },
    // { name: 'CONTACT', link: '/' },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='w-screen border-opacity-50 fixed h-24 top-5 left-0'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer md:ml-32 text-white font-[Poppins] text-gray-800'>
          HOWCS
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl text-white absolute right-8 top-4 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 md:bg-opacity-0 bg-opacity-50 bg-white  text-b absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className='md:ml-6  text-xl pr-2 md:my-0 my-10'>
              <a href={link.link} className='text-white  duration-500'>
                {link.name}
              </a>
            </li>
          ))}
          <Button>
            LOGIN
          </Button>
        </ul>
      </div>
    </div>
  );
};

const Button = (props) => {
  return (
    <button
      className=' border-2 border-opacity-50  text-white font-[Poppins] py-2 px-12 rounded md:mr-48 md:ml-12 bg-indigo-400 hover:bg-opacity-0 duration-500'
    >
      {props.children}
    </button>
  );
};

export default Navbar;
