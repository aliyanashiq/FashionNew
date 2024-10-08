import React from 'react';
import { FaPinterestP } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { useDataContext } from '../DataContext'; // Import your DataContext

function F5() {
    const { CARDDATA } = useDataContext(); // Access CARDDATA from the context

    return (
        <div className="w-[147%] h-[800vh] xl:w-[103%] lg:w-[100%] md:w-[147%]  flex  relative  md:h-[450vh] xl:h-[210vh]  xl:flex-wrap lg:flex-wrap md:flex-wrap flex-wrap lg:h-[278vh] justify-center xl:gap-4 py-8 xl:px-[1.5rem]">
            {CARDDATA.map((item, index) => (
                <div key={index} className=" xl:w-[400px] lg:w-[400px] md:w-[462px] w-[35rem] h-[125vh]  xl:h-[100vh] lg:h-[90vh] md:h-[142vh] bg-zinc-800 text-white overflow-hidden shadow-lg">
                    <img src={item.imagedat} alt={item.heading} className=" xl:h-[560px] lg:h-[300px] md:h-[589px] h-[24rem] w-full object-cover" />
                    <div className="p-6 h-[35vh] mt-[32px] xl:mt-0 lg:mt-0 md:mt-0    ">
                        <h2 className=" text-4xl xl:text-xl lg:text-lg md:text-lg font-thin mb-2 text-center xl:h-[7.5rem] lg:h-[5.5rem] xl:px-20 lg:px-14 ">{item.heading}</h2>
                        <div className="flex items-center justify-center gap-4 mt-[30px] xl:mt-4 lg:mt-0 md:mt-0">
                            <FaPinterestP className="text-sm" />
                            <IoMdShare className="text-sm" />
                            <button className='border px-4 py-[0.25rem]'>READ MORE</button>
                            <MdMarkUnreadChatAlt className="text-sm" />
                            <FaLock className="text-sm" />
                        </div>
                    </div>
                </div>
            ))}
            <button className=" absolute top-[790vh] xl:top-[101rem] lg:top-[91.5rem] md:top-[143rem] bg-transparent border-b pb-2 my-16 border-neutral-950 text-black font-thin">
              LOAD MORE POST
            </button>
        </div>
    );
}

export default F5;
