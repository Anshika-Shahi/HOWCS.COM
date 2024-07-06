import React, { useState } from 'react';
import {Links} from '../../constants';
import './Navbar.css';

const Navbar = () => {

  let [open, setOpen] = useState(false);

  return (
    <div className='navbar w-screen fixed h-20 top-0 left-0'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer md:ml-32 text-white font-[Poppins] text-gray-800'>
          HOWCS
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl text-white absolute right-8 top-6 cursor-pointer  md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`navdrop md:flex md:items-center text-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto  transition-all duration-500 ease-i bg-opacity-90 backdrop-blur-lg md:bg-none md:backdrop-blur-none ${
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
