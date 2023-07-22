import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Search", link: "/search" },

    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full relative top-0 left-0'>
            <div className='md:flex items-center justify-between   md:px-7 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-mono 
      text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <img src="https://kharel-ranjan11.github.io/Ecommrece-MD-/assest/image/fav.png" alt="" className='h-12' />
                    </span>
                    <span className='translate-y-1'>
                        Online<span className='text-indigo-600'>Store
                        </span>
                    </span>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute  right-8 top-3.5 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12
                 absolute md:static  md:z-auto 
                 z-30
                 left-0 w-full md:w-auto md:pl-0 addBg
                  pl-9 transition-all duration-500 ease-in ${open ? 'top-14 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='  md:ml-8 text-xl md:my-0 my-7'>
                                <Link to={link.link} className={`text-gray-800 ${window.location.pathname === link.link ? 'text-indigo-600 underline' : ''} hover:text-gray-400 duration-500`}>{link.name}</Link>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}
