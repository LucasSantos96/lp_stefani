'use client';
import React, { useState }from 'react';
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { FiX } from "react-icons/fi";

const NavMenu = () => {


      const [isOpen, setIsOpen] = useState(false);

    function toggleMenu(){
        setIsOpen(!isOpen);
    }

  return (
    <nav className='text-white '>
          <div className="w-full">
        {/*Menu mobile */}
        <nav className={`${isOpen ? "flex" : "hidden"} lg:hidden flex-col gap-4 absolute right-0 top-0 px-20 pt-20 bg-[#1111119d]  h-full text-sm `}>
        <Link href={'/'}>Início</Link>
        <Link href={'#about'}>Sobre</Link>
        <Link href={'#gallery'}>Portifólio</Link>
        <Link href={'#contact'}>Contato</Link>

        </nav>
        {/*Botão menu mobile */}
            <button onClick={toggleMenu} className="lg:hidden  absolute right-14 top-8">{isOpen? (
                <FiX size={30}/>
                ):(
                <MdMenu size={30}/>
                )}</button>

                
                <nav className="hidden lg:flex lg:gap-8 lg:justify-center">
        <Link className="hover:scale-105 duration-200 hover:text-gray-400" href={'/'}>Início</Link>
        <Link className="hover:scale-105 duration-200 hover:text-gray-400" href={'#about'}>Sobre</Link>
        <Link className="hover:scale-105 duration-200 hover:text-gray-400" href={'#gallery'}>Portifólio</Link>
        <Link className="hover:scale-105 duration-200 hover:text-gray-400" href={'#contact'}>Contato</Link>

        </nav>
      </div>

    </nav>
  )
}

export default NavMenu