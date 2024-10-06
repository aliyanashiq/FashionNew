import React, { createContext, useState, useContext } from 'react';
import Fpic1 from './assets/pexels-lum3n-44775-322207.jpg';
import Fpic2 from './assets/pexels-harsh-kushwaha-804217-1689731.jpg';
import Fpic3 from './assets/pexels-darina-belonogova-7959665.jpg';
import Fpic4 from './assets/pexels-wendywei-3973974.jpg';
import Fpic5 from './assets/pexels-monica-1034584.jpg';
import Fpic6 from './assets/pexels-harrisonhaines-3204051.jpg';
import Fpic7 from './assets/pexels-annetnavi-792777.jpg';
import Fpic8 from './assets/pexels-jonathanborba-3763583.jpg';
import Fpic9 from './assets/pexels-baphi-1191716.jpg';
import Fpic10 from './assets/pexels-arina-krasnikova-5416632.jpg';
import Fpic11 from './assets/pexels-askar-abayev-5638813.jpg';
import Fpic12 from './assets/pexels-rachel-claire-4992767.jpg';
import Pic1 from './assets/pexels-konrads-photo-28541504.jpg';
import Pic2 from './assets/pexels-harsh-kushwaha-804217-1689731.jpg';
import pic3 from './assets/pexels-mahdi-chaghari-9996334-13634600.jpg'
import pic4 from './assets/pexels-arina-krasnikova-5416632.jpg'
import pic5 from './assets/pexels-askar-abayev-5638644.jpg'
import pic6 from './assets/pexels-askar-abayev-5638676.jpg'
import pic7 from './assets/pexels-jonathanborba-3763583.jpg'
import pic8 from './assets/pexels-huy-nguy-n-1640325753-28354746.jpg'
import pic9 from './assets/pexels-harrisonhaines-3204051.jpg'
import pic10 from './assets/pexels-katia-miasoed-624959709-28558069.jpg'
import pic11 from './assets/pexels-konrads-photo-28541504.jpg'
import pic12 from './assets/pexels-baphi-1191716.jpg'
import pic13 from './assets/pexels-pixabay-267308.jpg'
import pic14 from './assets/pexels-rachel-claire-4992767.jpg'
import pic15 from './assets/pexels-igor-ovsyannykov-56123-205961.jpg'
import pic16 from './assets/pexels-n-voitkevich-4641954.jpg'
import pic17 from './assets/pexels-pixabay-39691.jpg'
import pic18 from './assets/pexels-vika-glitter-392079-1620653.jpg'
import pic19 from './assets/pexels-vince-2227832.jpg'
import pic20 from './assets/pexels-scottwebb-1029599.jpg'
import pic21 from './assets/pexels-olly-935743.jpg'
// Create the DataContext
const DataContext = createContext();

// DataProvider Component
export const DataProvider = ({ children }) => {
    const [activeCategory, setActiveCategory] = useState(true);
    const [isSearchHovered, setIsSearchHovered] = useState(false);
    const [issubHovered, setIssubHovered] = useState(false);
 

    const data = {
        beauty: {
            images: [
                { pic: Pic1, contpic: 'My Current Beauty lineup - All in sale' },
                { pic: Pic2, contpic: 'The holiday hosting hack I live by' },
                { pic: pic3, contpic: 'Rating this high-rank beauty product' }
            ],
            buttons: ['Hair', 'Makeup', 'Skin care', 'Tutorial'],
        },
        holiday: {
            images: [
                { pic: pic4, contpic: 'Plan your perfect holiday now!' },
                { pic: pic5, contpic: 'Holiday packages at great prices' },
                { pic: pic6, contpic: 'Explore the world with us' }
            ],
            buttons: ['THANKS GIVING', 'christmas', 'Gift guide'],
        },
        family: {
            images: [
                { pic: pic7, contpic: 'Family bonding tips for the holidays' },
                { pic: pic8, contpic: 'Join our family community' },
                { pic: pic9, contpic: 'Upcoming family events' }
            ],
            buttons: ['motherhood', 'relationship', 'familystyle', 'matermity','realtalk'],
        },
        fashion: {
            images: [
                { pic: pic10, contpic: 'Family bonding tips for the holidays' },
                { pic: pic11, contpic: 'Join our family community' },
                { pic: pic12, contpic: 'Upcoming family events' }
            ],
            buttons: ['all fashion', 'ily coutur', "Couple's style", 'sportwaer' ,'dresses','under 100$'],
        },
        life: {
            images: [
                { pic: pic13, contpic: 'Family bonding tips for the holidays' },
                { pic: pic14, contpic: 'Join our family community' },
                { pic: pic15, contpic: 'Upcoming family events' }
            ],
            buttons: ['Home decore', 'fitness', 'food', 'real talk'],
        },
        travel: {
            images: [
                { pic: pic16 , contpic: 'Family bonding tips for the holidays' },
                { pic: pic17, contpic: 'Join our family community' },
                { pic: pic18, contpic: 'Upcoming family events' }
            ],
            buttons: ['us','europe','latin america','beaches','travel tips'],
        },
        home: {
            images: [
                { pic: pic19, contpic: 'Family bonding tips for the holidays' },
                { pic: pic20, contpic: 'Join our family community' },
                { pic: pic21, contpic: 'Upcoming family events' }
            ],
            buttons: ['Home decore','building over first home'],
        },
        // Add more categories as needed
    };
    

    const imageList = [
        {
            src: "https://www.magment.com/wp-content/uploads/2016/02/Elegant-White-Prom-Dresses.jpg",
            heading: "Elegant White Prom Dress",
            description: "A beautifully designed white prom dress, perfect for formal events.",
        },
        {
            src: "https://ae01.alicdn.com/kf/HTB1r3sHHFXXXXcLXFXXq6xXFXXXX/New-Graceful-A-line-V-neck-Long-Lace-Women-Evening-Formal-Dress-Full-Sleeve-Satin-Prom.jpg",
            heading: "Graceful A-line V-neck Dress",
            description: "A full-sleeve satin prom dress that exudes grace and elegance.",
        },
        {
            src: "https://img.kwcdn.com/product/1dab9a690e/63f7126c-f6a3-47ba-9755-705a8865abd3_1340x1786.jpeg.a.jpeg",
            heading: "Classic Evening Gown",
            description: "A classic evening gown with a sleek, minimal design.",
        },
        {
            src: "https://ohhmymy.com/wp-content/uploads/2015/09/black-evening-dresses-uk.jpg",
            heading: "Black Evening Dress",
            description: "A stunning black evening dress, ideal for formal occasions.",
        },
        {
            src: "https://img.kwcdn.com/product/1dab9aa434/5ceaf5ae-ee45-4e7b-b477-9820339cc75d_2250x2250.jpeg?imageView2/2/w/800/q/70",
            heading: "Elegant Satin Gown",
            description: "An elegant satin gown with a beautiful flowing design.",
        },
        {
            src: 'https://cdn.tobi.com/product_images/lg/1/black-lady-dame-dress.jpg',
            heading: "Black Lady Dame Dress",
            description: "A stylish and bold black lady dame dress, perfect for formal settings.",
        },
    ];

    const imageData = [
        {
            titel: 'AMAZON',
            heading: "Woman Posing for Photo Shoot",
            paragraph: "This image captures a woman striking a pose during a photo shoot, radiating elegance and confidence. The setting emphasizes a professional atmosphere, perfect for fashion or editorial photography.",
            imageUrl: Fpic1 // Use the imported image directly
        },
        {
            titel: 'AMAZON',
            heading: "Moon and Star Pendant Necklace",
            paragraph: "A beautifully crafted necklace featuring a moon and star pendant, resting delicately on a surface. The photo highlights the intricate design of the jewelry, making it ideal for accessory and fashion showcases.",
            imageUrl: Fpic2 // Use the imported image directly
        },
        {
            titel: 'FASHION',
            heading: "Assorted Magazines in a Magazine Rack",
            paragraph: "A collection of assorted magazines neatly arranged in a magazine rack. The image conveys a sense of organization and variety, perfect for those interested in reading or interior design inspiration.",
            imageUrl: Fpic3 // Use the imported image directly
        }
    ];
    const DataSlider =
    [
        {
            heading: "Woman Posing for Photo Shoot1",
            paragraph: "This image captures a woman striking a pose during a photo shoot, radiating elegance and confidence. The setting emphasizes a professional atmosphere, perfect for fashion or editorial photography.",
            imageUrl: Fpic4
        },
        {
            heading: "Woman Posing for Photo Shoot2",
            paragraph: "This image captures a woman striking a pose during a photo shoot, radiating elegance and confidence. The setting emphasizes a professional atmosphere, perfect for fashion or editorial photography.",
            imageUrl: Fpic5
        }
        ,{
            heading: "Woman Posing for Photo Shoot3",
            paragraph: "This image captures a woman striking a pose during a photo shoot, radiating elegance and confidence. The setting emphasizes a professional atmosphere, perfect for fashion or editorial photography.",
            imageUrl: Fpic6
        }
    ]
    const CARDDATA=[
        {
            imagedat:Fpic7,
            heading: 'What I Wore:Weekly Round Up'
        },
        {
            imagedat:Fpic8,
            heading: 'Mom Will Love These Gift Ideas,No Matter Your Budget'
        },{
            imagedat:Fpic9,
            heading: "Yes you can take your active wear outside the gym. Here's how to style it for spring" 
        },{
            imagedat:Fpic10,
            heading: 'These Sneakers Go With Everything'
        },{
            imagedat:Fpic11,
            heading: "Amazon Toddler Accessories I Can't Tracel Without"
        },{
            imagedat:Fpic12,
            heading: "The Cutest Easter Craft For Any Age"
        }
    ]
    const value = {
        CARDDATA,
        DataSlider,
        imageData,
        imageList,
        data,
        activeCategory,
        setActiveCategory,
        issubHovered,
        setIssubHovered,
        isSearchHovered,
        setIsSearchHovered
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// Custom Hook for accessing DataContext
export const useDataContext = () => useContext(DataContext);
