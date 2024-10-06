import React, { useState, useEffect } from 'react';
import { useDataContext } from '../DataContext';
import { motion } from 'framer-motion';

function Search() {
    const [query, setQuery] = useState('');
    const { setIsSearchHovered, isSearchHovered } = useDataContext();
    const [isOpen, setIsOpen] = useState(false); // State for search visibility

    const handleSearch = () => {
        console.log("Searching for:", query);
        // Add your search logic here
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(() => {
        setIsOpen(isSearchHovered);
    }, [isSearchHovered]);

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: isOpen ? 0 : -100, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 1 }}
            className={`flex items-center space-x-4 h-20 bg-white w-full absolute top-12 left-[-24px] px-24`}
            onMouseLeave={() => setIsSearchHovered(false)}
        >
            <label htmlFor="search-input" className="text-3xl font-thin">What are you looking for?</label>
            <input
                id="search-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="border-b-2 border-gray-400 focus:border-blue-500 outline-none w-[30%] p-2"
                placeholder="Search....."
            />
        </motion.div>
    );
}

export default Search;
