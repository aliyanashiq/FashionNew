import React, { useEffect, useState } from 'react';
import Pic1 from '../assets/pexels-julia-volk-5273210.jpg';
import { IoMdShare } from 'react-icons/io';
import { FaPinterestP } from 'react-icons/fa';
import { CiChat1 } from 'react-icons/ci';
import { GiShoppingBag } from 'react-icons/gi';
import { CiInstagram } from 'react-icons/ci';
import { TiSocialFacebook } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";

function F1() {
  const [ShowIcons, setShowIcons] = useState();
  useEffect(() => {
    const HandelScroll = () => {
      setShowIcons(window.scrollY > window.innerHeight * 0.1);
    };
    window.addEventListener('scroll', HandelScroll);
    return () => window.removeEventListener('scroll', HandelScroll)
  }, []);
  return (
    <div className=" mx-auto px-[1rem] py-12 h-[197vh] w-[100%] relative 
    lg:w-[100%]  lg:px-[3rem]
    xl:h-[116vh] xl:w-[100%] xl:pl-[3rem] xl:px-0 xl:pr-[1rem]
    md:h-[180vh] md:w-[147%] md:px-[3rem]">
      <h1 className="text-6xl font-extralight text-center mt-8 mb-8">HELLO FASHION</h1>
      <div className={`fixed xl:w-full lg:w-full md:w-full w-[100%] xl:left-[6px] lg:left-0 xl:top-[76px] lg:top-[45rem]  top-[45.7rem] md:top-[45rem] md:left-0 left-0  transition-opacity z-50 ${ShowIcons ? 'opacity-100' : 'opacity-0'}`} >
        <ul className="xl:flex  lg:inline-flex md:inline-flex inline-flex overflow-hidden xl:bg-transparent  xl:pl-0 lg:pl-[37rem] xl:h-[14rem] lg:h-[3rem] md:h-[3rem] h-[3rem] md:pl-[26rem] pl-[10rem] xl:bg-opacity-0 lg:bg-black md:bg-black bg-black lg:w-full md:w-full w-[100%] xl:flex-col lg:flex-row  md:flex-row flex-row  lg:space-x-9  md:space-x-9 space-x-9  xl:space-y-4 xl:space-x-0  text-3xl">
          <li className='h-8 w-8 bg-black rounded-full xl:pt-0 lg:pl-[1.4px]  pt-[0.5px] lg:pt-[5.8px] md:pt-[5.8px]'><TiSocialFacebook className="cursor-pointer hover:text-gray-400 text-slate-100 p-1 " /></li>
          <li className='h-8 w-8 bg-black rounded-full xl:pt-0 pl-[1.4px] pt-[0.5px] lg:pt-[5.8px]      md:pt-[5.8px]'><CiInstagram className="cursor-pointer hover:text-gray-400 text-slate-100 p-1 " /></li>
          <li className='h-8 w-8 bg-black rounded-full xl:pt-0 pl-[1.4px] pt-[0.5px] lg:pt-[5.8px] md:pt-[5.8px]'><IoMdShare className="cursor-pointer hover:text-gray-400 text-slate-100 p-1" /></li>
          <li className='h-8 w-8 bg-black rounded-full xl:pt-0 pl-[1.4px] pt-[0.5px] lg:pt-[5.8px] md:pt-[5.8px]'><FaPinterestP className="cursor-pointer hover:text-gray-400 text-slate-100 p-1" /></li>
          <li className='h-8 w-8 bg-black rounded-full xl:pt-0 pl-[1.4px] pt-[0.5px] lg:pt-[5.8px] md:pt-[5.8px]'><TfiYoutube className="cursor-pointer hover:text-gray-400 text-slate-100 p-1" /></li>
        </ul>
      </div>

      {/* Image and content overlay */}
      <div className="relative group lg:w-[100%] ">
        <img src={Pic1} alt="Baked Cinnamon Apple Rings" className="w-full h-[700px] object-cover group-hover:opacity-75 transition-opacity duration-300 z-0" />

        {/* Content overlay */}
        <div className="absolute h-[16rem] top-[35rem] w-[94%]  left-[13px] inset-0 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] bg-white xl:top-96 xl:left-11 xl:h-[14rem] xl:w-[57%] lg:top-96 lg:left-11 lg:h-[14rem] lg:w-[57%]  md:h-[13rem] md:left-[2rem] md:w-[91%] md:top-[36rem]  justify-center text-black p-4 px-[1rem] md:px-[2rem] lg:px-[2rem]  xl:px-[2rem]">
          <h4 className="text-4xl font-thin">Baked Cinnamon Apple Rings-</h4>
          <h4 className="text-4xl mt-2 font-thin">The Perfect Fall Treat</h4>
          <p className="text-xs mt-4 font-thin">
            We made the cutest fall treat the other day with the kids - it was these baked cinnamon apple rings.
          </p>

          <div className="flex justify-between w-full mt-8">
            <button className="bg-transparent border-b-2 border-neutral-950 text-black font-thin">
              READ STORY
            </button>

            {/* Icon list */}
            <ul className="flex space-x-6 text-2xl">
              <li><IoMdShare className="hover:text-gray-300 cursor-pointer" /></li>
              <li><FaPinterestP className="hover:text-gray-300 cursor-pointer" /></li>
              <li><CiChat1 className="hover:text-gray-300 cursor-pointer" /></li>
              <li><GiShoppingBag className="hover:text-gray-300 cursor-pointer" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default F1;
