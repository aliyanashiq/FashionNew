import React from 'react';
import { useDataContext } from '../DataContext';
import { GiShoppingBag } from 'react-icons/gi';
import { CiChat1 } from 'react-icons/ci';
import { FaPinterestP } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';
import F4part1 from './F4part1';
import F4part2 from './F4part2';
import F4part3 from './F4part3';

function F4() {
    const { imageData } = useDataContext();

    return (
        <div className='w-[147%] xl:h-[284vh] lg:h-[330vh]  md:h-[583vh]  bg-white flex flex-col md:flex-row relative
        xl:px-16 xl:py-8 
        lg:px-8 lg:py-5
        xl:w-full lg:w-[100%] md:w-[147%] md:py-8 '>
            <div className="F4-side1   w-[100%] h-[389vh]  
             xl:h-[350vh] xl:w-[100%]  xl:flex xl:flex-col xl:flex-wrap 
            md:w-[100%] md:h-[583vh] md:none xl:mx-0 lg:mx-0 mx-0  md:mx-[3.5rem]
            lg:w-[100%] lg:mt-4 lg:mb-4 lg:h-[320vh] lg:flex lg:flex-wrap lg:flex-col
            
            ">
                {imageData.map((item, index) => (
                    <div key={index} className="image-card flex flex-col  h-[117vh]
                    xl:h-[92vh] xl:flex xl:flex-col lg:flex lg:flex-col lg:h-[106vh] md:h-[158vh] xl:w-[100%] lg:w-[100%] w-[98%] md:flex md:flex-row bg-white  xl:mt-0 lg:mt-0 md:mt-[8rem] mt-[3rem] 
                    xl:pl-0 lg:pl-0 md:pl-[2rem] pl-[1rem] ">
                        {/* Image Section */}
                        <div className="relative w-[97%] h-[96vh] xl:h-[89vh] lg:h-[100vh]  md:w-[100%] md:h-[140vh] shadow-lg ">
                            <img
                                src={item.imageUrl}
                                alt={item.heading}
                                className="h-[500px] xl:h-[33.8rem] lg:h-[520px] md:h-[158vh] 
                                xl:w-1/2 lg:w-1/2  md:w-[100%] w-[100%]   object-cover"
                            />
                            {/* Content Section: Overlay for md and below */}
                            <div className="content absolute top-[338px] left-[21px] p-6 h-[18rem] w-[90%] bg-white md:w-[85%] shadow-lg
                            xl:absolute xl:top-[0rem] xl:left-[25.5rem] xl:w-1/2 xl:h-[100%] xl:p-6
                            lg:absolute    lg:top-[0rem]    lg:left-[18.4rem]    lg:w-[50%]   lg:h-[100%]  lg:pl-2 lg:p-0 lg:pr-2
                             md:absolute md:top-[43rem] md:left-[80px] md:bg-white md:text-black md:h-[15rem] md:shadow-lg flex flex-col justify-center
                             lg:bg-transparent lg:text-black ">
                                <p className='relative md:-top-0 xl:text-[10px] lg:text-[7px]'>{item.titel}</p>
                                <h3 className="xl:text-4xl lg:text-4xl md:text-3xl font-thin text-gray-800 lg:text-black mb-4">{item.heading}</h3>
                                <p className="text-gray-600 lg:text-[10px] font-thin mb-6">{item.paragraph}</p>
                                <div className="flex justify-between items-center mt-8">
                                    {/* Read Story Button */}
                                    <button className="bg-transparent border-b-2 border-neutral-950 text-black font-thin lg:text-black">
                                        READ STORY
                                    </button>
                                    {/* Icon List */}
                                    <ul className="flex xl:space-x-4 lg:space-x-3 md:space-x-3 xl:text-[1.3rem] lg:text-xl text-gray-500">
                                        <li><IoMdShare className="hover:text-black cursor-pointer" /></li>
                                        <li><FaPinterestP className="hover:text-black cursor-pointer" /></li>
                                        <li><CiChat1 className="hover:text-black cursor-pointer" /></li>
                                        <li><GiShoppingBag className="hover:text-black cursor-pointer" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Corrected side 2 */}
            <div className="F4-side2 w-[35rem] absolute md:relative md:ml-4 mt-8 md:mt-0 lg:px-4 xl:block lg:block md:hidden">
                <F4part1 />
                <F4part2 />
                <F4part3 />
            </div>
        </div>
    );
}

export default F4;
