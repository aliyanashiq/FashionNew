import React, { useState } from 'react';
import Select from 'react-select';
import { useDataContext } from '../DataContext'; // Adjust the path accordingly

const colourOptions = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' }
];

function F4part1() {
  const { DataSlider } = useDataContext(); // Use context to get DataSlider
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % DataSlider.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + DataSlider.length) % DataSlider.length);
  };

  return (
    <div className='h-[98vh]  flex-col items-center hidden  xl:flex lg:flex md:hidden'>
      <Select
        className="basic-single pb-4 w-full max-w-xs"
        classNamePrefix="select"
        isClearable={true}
        isSearchable={true}
        name="color"
        options={colourOptions}
      />

      {/* Image Slider */}
      <div className="relative xl:h-[82.5vh] lg:h-[93vh] w-full max-w-xl group">
        <img
          src={DataSlider[currentIndex].imageUrl}
          alt={DataSlider[currentIndex].heading}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay content */}
        <div className="absolute xl:top-40 xl:left-14  lg:left-[2rem] inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 transition-opacity duration-300 group-hover:opacity-0 h-52 w-64 p-4">
          <h2 className="text-lg font-semibold text-white">{DataSlider[currentIndex].heading}</h2>
          <p className="text-sm text-gray-200">{DataSlider[currentIndex].paragraph}</p>
        </div>

        {/* Buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prevSlide}
            className="text-white p-2 lg:relative lg:left-[-7px]  hover:bg-gray-700 transition-colors"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="text-white p-2 lg:relative lg:right-[-12px]  hover:bg-gray-700 transition-colors"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

export default F4part1;
