import React, { useState, useEffect } from 'react';
import { useDataContext } from '../DataContext'; // Adjust the import path accordingly
import { motion } from 'framer-motion';
function Subscribe() {
    const [email, setEmail] = useState('');
    const { issubHovered ,setIssubHovered } = useDataContext();
    const [isOpen, setIsOpen] = useState(false); // State for subscribe visibility

    useEffect(() => {
        setIsOpen(issubHovered);
    }, [issubHovered]);

    const handleSubscribe = () => {
        // Implement your subscribe logic here
        console.log("Subscribing with email:", email);
    };

    
    return (
        <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isOpen ? 0 : -100, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 1 }}
        className={`flex items-center space-x-4 h-20 bg-white w-full absolute top-12 left-[-24px] px-24`}
            onMouseLeave={() => setIssubHovered(false)}
        >
            <p className="text-lg text-black">Are we friends? Subscribe to Hello Fashion</p>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
                className="border-b-2 border-gray-400 focus:border-blue-500 outline-none w-[50%] p-2"
                placeholder="Enter your email"
            />
            
        </motion.div>
    );
}

export default Subscribe;
