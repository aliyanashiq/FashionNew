import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from '../DataContext';
import { CiInstagram, CiSearch } from 'react-icons/ci';
import { FiMenu } from 'react-icons/fi'; // Icon for menu
import Subscribe from './Subscribe';
import Search from './Search';

function Header() {
    const [query, setQuery] = useState('');

    const {
        setActiveCategory,
        setIsSearchHovered,
        issubHovered,
        isSearchHovered,
        setIssubHovered,
        data,
    } = useDataContext();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu state
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto'; // Prevent scrolling when mobile menu is open
    }, [isMobileMenuOpen]);

    // Close menu when clicking outside or on an item
    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className={`shadow-md fixed 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] w-[100%] top-0 z-50 ${isScrolled ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <header className="flex justify-between items-center 2xl:w-[100%] xl:w-[100%] lg:w-[100%]  xl:px-[2rem] md:px-[1.5rem] lg:px-[1rem] px-4 py-2 w-[100%]">
                {/* Logo and Mobile Menu Icon */}
                <nav className="flex items-center">

                    <Link to="/">
                        <div className="logo xl:block hidden lg:block md:hidden xl:h-8 lg:h-5
                        
                        xl:w-8 lg:w-5 
                        xl:mr-3 lg:mr-2 
                         bg-rose-400 rounded-full items-center justify-center">

                        </div>
                    </Link>
                    {/* Mobile and Tablet Menu Toggle */}
                    <button className="lg:hidden text-2xl" onClick={toggleMenu}> {/* Toggle mobile menu */}
                        <FiMenu />
                    </button>
                    <p className="xl:hidden lg:hidden text-3xl  font-thin md:text-3xl md:top-[-7px]  md-contents relative left-[7rem] md:left-[30rem] ">Hello Fashion</p>
                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex xl:space-x-8 lg:space-x-5 xl:text-xs lg:text-[0.50rem] items-center font-thin">
                        <li><a href="#" className="hover:text-gray-600">ABOUT</a></li>
                        <li><a href="#" className="hover:text-gray-600">HF PRESETS</a></li>
                        <Link to="/shop" className="hover:text-gray-600">
                            SHOP
                        </Link>
                    </ul>
                </nav>

                {/* Main Category Menu for Desktop */}
                <nav className={`hidden lg:flex justify-center ${isScrolled ? 'text-white' : 'text-black'}`}>
                    <ul className="flex space-x-6 xl:text-xs lg:text-[0.50rem]  uppercase font-thin tracking-wider">
                        {['beauty', 'holiday', 'family', 'fashion', 'life', 'travel', 'home'].map((category) => (
                            <li key={category} onMouseOver={() => setActiveCategory(category)}>
                                <a href="#" className="hover:text-gray-600">{category.toUpperCase()}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Icons and Subscribe/Search */}
                <nav className="flex justify-end space-x-6 items-center">
                    <ul className="flex items-center space-x-4 xl:text-xs lg:text-[0.50rem]  font-thin">
                        <li onMouseEnter={() => setIssubHovered(true)}>
                            <a href="#" className="hover:text-gray-600 xl:block hidden lg:hidden md:hidden">SUBSCRIBE</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-600 hidden xl:block lg:hidden md:hidden">CONTACT</a>
                        </li>
                        <li className="xl:text-base lg:text-xs">
                            <CiInstagram className="cursor-pointer lg:block hidden hover:text-gray-600 md:hidden" />
                        </li>
                        <li className="xl:text-base lg:text-xs" onMouseEnter={() => setIsSearchHovered(true)}>
                            <CiSearch className="cursor-pointer lg:block hidden md:hidden hover:text-gray-600" />
                        </li>
                    </ul>
                    {issubHovered && <Subscribe />} {/* Show Subscribe component when hovered */}
                    {isSearchHovered && <Search />} {/* Show Search component when hovered */}
                </nav>
            </header>

            {/* Mobile and Tablet Menu for screen width below 1024px */}
            <div className={`fixed top-0 left-0 h-full w-full lg:hidden z-40 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                {/* Menu List */}
                <ul
                    className={`fixed md:top-[2.5rem] top-[3.2rem] left-0 md:w-[25rem] w-[18rem] transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      transition-transform duration-500 ease-in-out bg-black bg-opacity-90 h-[139vh] flex flex-col space-y-2 px-6 py-[3rem] text-white text-sm uppercase overflow-y-auto`}
                >
                    {[
                        ['about', 'hf presets', 'shop', 'subscribe', 'videos', 'shop'],
                        ['beauty', 'Hair', 'Makeup', 'Skin care', 'Tutorial'],
                        ['holiday', 'THANKSGIVING', 'Christmas', 'Gift guide'],
                        ['family', 'Motherhood', 'Relationship', 'Family style', 'Maternity', 'Real talk'],
                        ['fashion', 'All fashion', 'Ily Couture', "Couple's style", 'Sportswear', 'Dresses', 'Under $100'],
                        ['life', 'Home decor', 'Fitness', 'Food', 'Real talk'],
                        ['travel', 'US', 'Europe', 'Latin America', 'Beaches', 'Travel tips'],
                    ].map((category, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setActiveCategory(category);
                                closeMenu(); // Close menu on selection
                            }}
                        >
                            <a href="#" className={`hover:text-gray-400 md:text-sm  ${typeof category === 'object' &&
                                ['beauty', 'holiday', 'family', 'fashion', 'life', 'travel', 'home'].includes(
                                    category[0].toLowerCase()
                                )
                                ? 'font-bold'
                                : 'font-thin'
                                }`}
                            >
                                {typeof category === 'object' ? (
                                    <>
                                        <span className="font-thin md:text-2xl text-3xl md:font-thin pl-4">{category[0]}</span>
                                        <ul className="pl-4">
                                            {category.slice(1).map((subItem, subIndex) => (
                                                <li key={subIndex} className="hover:text-gray-400 text-base font-thin capitalize mt-1">
                                                    {subItem}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    category
                                )}
                            </a>
                        </li>
                    ))}

                    <div className="relative" id="input">
                        <input

                            placeholder="Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="block w-full text-sm h-[50px] px-4 text-white bg-transparent border-b-2 border-white appearance-none focus:border-b-2 focus:border-white focus:outline-none focus:ring-0 peer invalid:border-b-error-500 invalid:focus:border-b-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                            id="floating_outlined"
                            type="text"
                        />

                        <div className="absolute top-3 right-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="slate-300"
                                viewBox="0 0 24 24"
                                height="24"
                                width="24"
                            >
                                <path
                                    d="M10.979 16.8991C11.0591 17.4633 10.6657 17.9926 10.0959 17.9994C8.52021 18.0183 6.96549 17.5712 5.63246 16.7026C4.00976 15.6452 2.82575 14.035 2.30018 12.1709C1.77461 10.3068 1.94315 8.31525 2.77453 6.56596C3.60592 4.81667 5.04368 3.42838 6.82101 2.65875C8.59833 1.88911 10.5945 1.79039 12.4391 2.3809C14.2837 2.97141 15.8514 4.21105 16.8514 5.86977C17.8513 7.52849 18.2155 9.49365 17.8764 11.4005C17.5979 12.967 16.8603 14.4068 15.7684 15.543C15.3736 15.9539 14.7184 15.8787 14.3617 15.4343C14.0051 14.9899 14.0846 14.3455 14.4606 13.9173C15.1719 13.1073 15.6538 12.1134 15.8448 11.0393C16.0964 9.62426 15.8261 8.166 15.0841 6.93513C14.3421 5.70426 13.1788 4.78438 11.81 4.34618C10.4412 3.90799 8.95988 3.98125 7.641 4.55236C6.32213 5.12348 5.25522 6.15367 4.63828 7.45174C4.02135 8.74982 3.89628 10.2276 4.28629 11.6109C4.67629 12.9942 5.55489 14.1891 6.75903 14.9737C7.67308 15.5693 8.72759 15.8979 9.80504 15.9333C10.3746 15.952 10.8989 16.3349 10.979 16.8991Z"
                                ></path>
                                <rect
                                    transform="rotate(-49.6812 12.2469 14.8859)"
                                    rx="1"
                                    height="10.1881"
                                    width="2"
                                    y="14.8859"
                                    x="12.2469"
                                ></rect>
                            </svg>
                        </div>
                    </div>
                </ul>


            </div>

        </div>
    );
}

export default Header;
