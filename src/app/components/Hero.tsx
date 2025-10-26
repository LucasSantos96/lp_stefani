
import React from "react";

import Link from "next/link";
import NavMenu from "./NavMenu";
//icons

import { FiInstagram } from "react-icons/fi";
import { BsThreads } from "react-icons/bs";
//--//


const Header = () => {
  return (
    <section
      style={{ backgroundImage: "url('/bg-hero.png')" }}
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white px-8 ">
    <NavMenu/>
      <div className="flex w-full">
        <div className=" w-5/6 mt-90 lg:mt-60">
          <h1 className="font-aboreto font-light text-4xl md:text-7xl text-shadow-gray-700 text-shadow-sm">
            Stefani Cedro <br />{" "}
            <span className="">Fotografia</span>
          </h1>
        </div>
        {/* Container para ícones e linhas */}
        <div className="flex w-1/6 mt-30 flex-col items-center justify-center">
          {/* Linha superior */}
          <div className="h-30 w-px bg-white/40" />
          {/* Container dos ícones */}
          <div className="my-4 flex flex-col gap-4">
            <Link href={"https://www.instagram.com/stefani_cedrofotografia/"} target="_blank" className="duration-400 hover:scale-125">
              <FiInstagram size={20} />
            </Link>
            <Link href={""} target="_blank" className="duration-400 hover:scale-125">
             
               <Link href={"https://www.threads.com/@stefani_cedrofotografia?xmt=AQF0Mjd4ygEBUlO6twx8VP-rQW9b0z1WnIl4_BeK-8-pbxA"} target="_blank" className="duration-400 hover:scale-125">
              <BsThreads size={20}/>
            </Link>
              
            </Link>
          </div>
          {/* Linha inferior */}
          <div className="h-30 w-px bg-white/40" />
        </div>
        
      </div>
  <Link href={'https://wa.me/5521968869436?text=Oi%2C%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20orcamento'} target="_blank" className="absolute left-8 mt-140 lg:mt-110">
  <button className="bg-white/70 text-black/80 font-montserrat font-semibold p-2 rounded cursor-pointer  shadow-2xl hover:scale-105 duration-200 hover:bg-gray-400 ">Entrar em contato </button>
  </Link>
    </section>
  );
};

export default Header;
