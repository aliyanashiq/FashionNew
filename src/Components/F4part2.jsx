import React from 'react';
import './Components.css'; // Make sure your custom CSS file includes the scrollbar hiding styles

function F4part2() {
  return (
    <div className=' xl:block xl:relative xl:top-[-33px] lg:top-[3rem] lg:block md:hidden hidden Scrooll xl:h-[89vh] lg:h-[100vh] p-1 border-2 overflow-y-scroll relative top-[-3rem] no-scrollbar'>
      <h2 className="text-xs text-center relative top-4 font-thin mb-4">Latest Friends</h2>
      <h4 className="text-4xl text-center font-thin mb-6">SHOP NOW</h4>

      <div className="flex flex-col gap-6">
        {/* First Product */}
        <div className="con1 h-[150px] w-[187px] relative left-[4rem] transition-transform transform hover:scale-105">
          <img
            src="https://www.hellofashionblog.com/wp-content/uploads/2021/04/varle301001a530_q6_2-0._UX357_QL90_.jpg"
            alt="Ribbed Halfzip Pullover"
            className="w-[77px] h-[120px] object-cover bg-left relative left-12"
          />
          <hr className='mx-4 mt-4 bg-slate-400'/>
          <p className="p-2 text-center text-sm font-thin">RIBBED HALFZIP PULLOVER</p>
        </div>

        {/* Second Product */}
        <div className="con1 h-[150px] w-[187px] relative left-[4rem] transition-transform transform hover:scale-105">
          <img
            src="https://www.hellofashionblog.com/wp-content/uploads/2021/04/jcque307011a561_q6_2-0._UX357_QL90_.jpg"
            alt="Pink Micro Satchel"
            className="w-[77px] h-[120px] object-cover bg-left relative left-12"
          />
          <hr />
          <p className="p-2 text-center text-sm font-thin">PINK MICRO SATCHEL</p>
        </div>

        {/* Third Product */}
        <div className="con1 h-[150px] w-[187px] relative left-[4rem] transition-transform transform hover:scale-105">
          <img
            src="https://www.hellofashionblog.com/wp-content/uploads/2021/04/leviv206681a079_q6_2-0._UX357_QL90_.jpg"
            alt="Wide Leg Denim"
            className="w-[77px] h-[120px] object-cover bg-left relative left-12"
          />
          <hr />
          <p className="p-2 text-center text-sm font-thin">WIDE LEG DENIM (UNDER $100)</p>
        </div>
      </div>
    </div>
  );
}

export default F4part2;
