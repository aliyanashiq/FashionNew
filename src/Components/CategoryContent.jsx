import React, { useEffect, useState } from 'react';
import { useDataContext } from '../DataContext';

function CategoryContent() {
  const { data, activeCategory, setActiveCategory } = useDataContext();
  const currentCategory = data[activeCategory];
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (activeCategory) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [activeCategory]);

  if (!currentCategory) return null;

  return (
    <div
      className={`absolute top-12 left-0 w-full xl:h-[75vh] lg:h-[75vh] bg-white p-4 z-50 overflow-auto transition-transform duration-1000 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      // Trigger category close on mouse leave
      onMouseLeave={() => setActiveCategory(false)}
    >
      {/* Main flex container to divide the content */}
      <div className="flex h-full">
        {/* Image container (70% width) */}
        <div className="w-7/10 flex flex-wrap">
          {currentCategory.images.map((img, idx) => (
            <div key={idx} className="relative group h-full w-[30%] p-2">
              {/* Image */}
              <img
                src={img.pic}
                alt={`category-${activeCategory}-${idx}`}
                className="xl:w-[320px] lg:w-[250px] h-full object-cover transition-transform duration-300"
              />
              {/* Hover effect for contpic */}
              <div className="absolute xl:top-[15rem] lg:top-[13rem] xl:left-[2rem] lg:left-[0.6rem] inset-0 xl:h-40 lg:h-28 xl:w-[15rem] lg:w-[13.8rem] flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white relative bottom-8 xl:left-5 lg:left-0 lg:px-3 xl:text-xl lg:text-sm font-thin">{img.contpic}</p>
                <button className="absolute xl:top-20 lg:top-14 xl:right-7 lg:right-12 xl:w-36 lg:w-28 bg-transparent border-b-2 border-white text-white font-thin text-center py-2">
                  READ STORY
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Button container (30% width) */}
        <div className="w-3/10 flex flex-col justify-center relative xl:-top-[7rem] lg:-top-[4rem] -left-20">
          {currentCategory.buttons.map((btn, idx) => (
            <button
              key={idx}
              className="uppercase text-left p-2"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      <div className="Categoryinput absolute xl:left-[60rem] lg:left-[46rem] xl:top-[15rem]     lg:top-[16.9rem] pr-14">
        <p className='xl:text-3xl lg:text-xl font-thin'>Get Hello Fashion Straight To Your Inbox.</p>
        <input type="email" className="border-b-2 border-gray-400 focus:border-blue-500 outline-none w-full p-2" placeholder="Enter your email" />
      </div>
    </div>
  );
}

export default CategoryContent;
