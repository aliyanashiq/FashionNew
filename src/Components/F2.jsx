import React from 'react';
import { IoMdShare } from 'react-icons/io';
import { FaPinterestP } from 'react-icons/fa';
import { CiChat1 } from 'react-icons/ci';
import { GiShoppingBag } from 'react-icons/gi';

function F2() {
  return (
    <div className='flex flex-wrap gap-6 w-[147%] p-[1rem] pl-[1rem]  h-[304vh] mt-[2rem]
     
     xl:h-[177vh] xl:p-[1rem] xl:pl-[3rem] xl:pr-[1rem] xl:mt-0 xl:w-[100%] xl:flex xl:flex-wrap xl:gap-6
     lg:h-[178vh] lg:w-[96%] lg:p-12 lg:pl-14 lg:mt-0  lg:flex lg:flex-wrap 
     md:h-[357vh]  md:p-[1rem]  md:mt-[1rem] md:flex md:flex-wrap md:px-[3rem]
       '>
      {/* Card 1 */}
      <div className="con1 xl:basis-[48%] lg:basis-[45%] md:w-[100%] ">
        <div className="relative xl:h-[99vh] 
        lg:h-[123vh]

         w-full">
        <img src="https://images.pexels.com/photos/28354749/pexels-photo-28354749/free-photo-of-a-family-poses-for-a-photo-in-the-garden.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className=' hover:opacity-75
        xl:h-[148vh] xl:w-[100%]
        lg:h-[123vh] lg:w-[100%]
        md:h-[150vh] md:w-[209vh] md:object-cover
        w-[112vh] h-[120vh] object-cover
          ' />
          <div className="absolute  shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] bottom-[-7rem]  left-[15px] right-0 bg-white bg-opacity-90 p-6 w-[92%]
          xl:bottom-[-31rem] xl:left-[25px]
          lg:bottom-[-6rem] lg:left-[17px]
          md:bottom-[-6rem] md:left-[43px]
           ">
            <p className="text-sm font-thin">DRESSES</p>
            <h1 className="text-2xl  mt-2 font-extralight">What to Wear for Every Type of Fall Wedding</h1>
            <p className="text-gray-600 mt-2 font-thin">
              Wedding season is my favorite season. I love getting dressed up and will take every opportunity to try on new outfits.
            </p>
            <div className="flex justify-between w-full">
            <button className=' bg-transparent border-b-2 border-neutral-950  text-black font-thin'>
              READ STORY
            </button>

            {/* Icon list */}
            <ul className='flex space-x-6 mt-8 text-2xl'>
              <li><IoMdShare className="hover:text-gray-300 cursor-pointer" /></li>
              <li><FaPinterestP className="hover:text-gray-300 cursor-pointer" /></li>
              <li><CiChat1 className="hover:text-gray-300 cursor-pointer" /></li>
              <li><GiShoppingBag className="hover:text-gray-300 cursor-pointer" /></li>
            </ul>
          </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="con2 basis-[100%] xl:basis-[50%] lg:basis-[50%] md:w-[100%]">
        <div className="relative top-[-1rem] w-full
        xl:h-[148vh] xl:top-[0rem] xl:left-0
         lg:h-[120vh] lg:top-[0rem] lg:left-[3rem]
         
          ">
          <img
            src="https://images.pexels.com/photos/4406040/pexels-photo-4406040.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Beauty Sale"
            className='  object-cover hover:opacity-75 
            xl:h-full
            lg:h-[123vh]
            md:h-[150vh]
            h-[120vh] w-[100%]
            '
          />
          <div className="absolute bottom-[-6.5rem] left-[15px] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]  right-0 bg-white bg-opacity-90 p-6 w-[92%]
          xl:bottom-[-6.5rem] xl:left-[25px]
          lg:bottom-[-7rem] lg:left-[19px]
          md:left-[43px]
          ">
            <p className="text-sm font-thin">DRESSES</p>
            <h1 className="text-2xl  mt-2 font-extralight">What to Wear for Every Type of Fall Wedding</h1>
            <p className="text-gray-600 mt-2 font-thin">
              Wedding season is my favorite season. I love getting dressed up and will take every opportunity to try on new outfits.
            </p>
            <div className="flex justify-between w-full">
            <button className=' bg-transparent border-b-2 border-neutral-950  text-black font-thin'>
              READ STORY
            </button>

            {/* Icon list */}
            <ul className='flex space-x-6 mt-8 text-2xl'>
              <li><IoMdShare className="hover:text-gray-300 cursor-pointer" /></li>
              <li><FaPinterestP className="hover:text-gray-300 cursor-pointer" /></li>
              <li><CiChat1 className="hover:text-gray-300 cursor-pointer" /></li>
              <li><GiShoppingBag className="hover:text-gray-300 cursor-pointer" /></li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default F2;
