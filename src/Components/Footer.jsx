import React from 'react'

function Footer() {
  return (
    <footer className="h-[30vh] w-[147%] bg-black text-white py-8 lg:mt-2rem md:mt-[5rem] md:w-[147%] lg:w-[100%] xl:w-[100%] xl:mt-[5rem] lg:mt-[9rem] mt-[5rem]">
      <div className="container  lg:mx-0 xl:flex lg:block  items-center lg:w-[100%] md:w-[150%] xl:justify-between lg:justify-center xl:ml-[38px] lg:ml-0 md:ml-[11.5rem] xl:mt-[3rem] lg:mt-[0rem]">
        <h4 className="text-xs font-thin text-center lg:text-center md:text-center">HELLO FASHION. ALL RIGHTS RESERVED.</h4>
        
        <nav>
          <ul className="flex space-x-6 justify-center lg:justify-center md:justify-center lg:my-[1rem]">
            <li className='font-thin'><a href="#" className="hover:text-gray-400">ABOUT</a></li>
            <li className='font-thin'><a href="#" className="hover:text-gray-400">SHOP</a></li>
            <li className='font-thin'><a href="#" className="hover:text-gray-400">CONTACT</a></li>
            <li className='font-thin'><a href="#" className="hover:text-gray-400">SUBSCRIBE</a></li>
            <li className='font-thin'><a href="#" className="hover:text-gray-400">HF PRESETS</a></li>
          </ul>
        </nav>
        
        <h4 className="text-xs font-thin text-center lg:text-center md:text-center">DESIGN + DEVELOPMENT BY GADAABOUTCREATIVE</h4>
      </div>
    </footer>
  )
}

export default Footer;
