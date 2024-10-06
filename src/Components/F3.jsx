import React, { useEffect, useState } from 'react';
import { useDataContext } from '../DataContext'; // Adjust the import path according to your structure

function F3() {
  const { imageList } = useDataContext(); // Use the custom hook to get imageList
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='w-[147%] h-[70vh] flex flex-wrap items-center
      xl:w-[100%] xl:flex xl:h-[60vh]
      lg:w-[100%] lg:flex lg:h-[70vh]
      md:w-[147%] md:flex md:h-[70vh] overflow-hidden'
      >
      {imageList.map((image, index) => (
        <div
          key={index}
          className={`relative group w-[208px] h-[368px] 
            xl:w-[224.6px] xl:h-[368px] 
            lg:w-[170.6px] lg:h-[368px] 
            md:w-[282px] md:h-[368px]
            ${index === 4 || index === 5 ? 'xl:block' : ''}
            ${index === 4 || index === 5 ? 'lg:block' : ''}
            ${index === 4 || index === 5 ? 'md:hidden' : ''} // Hide 5th and 6th images on screens below 768px
            ${screenWidth <= 425 && (index === 3 || index === 4 || index === 5) ? 'hidden' : ''} // Hide 4th, 5th, and 6th images on screens below 425px
            `}
        >
          <img
            src={image.src}
            alt={image.heading}
            className="w-[225px] h-[480px] object-cover transition-transform duration-500 group-hover:scale-105
              xl:w-[225px] xl:h-[480px] xl:object-cover
              lg:w-[251px] lg:h-[480px] lg:object-cover
              md:w-[283px]
              "
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end xl:p-4 lg:p-0 lg:pl-2">
            <div className="bg-black bg-opacity-50 relative w-[8.5rem]  pl-2 pt-3 pr-3
            xl:left-[-15px] lg:left-[-13px] md:left-[2px] md:w-[14rem] md:pl-4 md:pt-2
            xl:top-12 lg:top-[1rem] lg:w-[10rem]
            h-60 
            text-white xl:p-5 lg:p-4 shadow-lg">
              <h3 className="text-lg font-semibold text-zinc-400">{image.heading}</h3>
              <p className="text-sm text-zinc-400">{image.description}</p>
              <button className='relative top-5 bg-transparent border-b-2 border-white text-white font-thin'>
                VIEW THE POST
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default F3;
