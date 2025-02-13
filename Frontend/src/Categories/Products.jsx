import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import ProductLayout from '../Components/ProductLayout';

const Products = () => {
    // let a = [1, 2, 3, 4, 5, 98, 456, 456, 23, 78, 99, 101]; 
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            current.scrollBy({
                left: direction === 'left' ? -250 : 250,
                behavior: 'smooth',
            });
        }
    };
    
    const imgurl = [
        "/vegtables/carrot.jpg",
        "/vegtables/cauliflower.jpg",
        "/vegtables/ladiesfinger.png",
        "/vegtables/onion.png",
        "/vegtables/papaya.jpg",
        "/vegtables/pine.jpg",
        "/vegtables/potato.jpg",
        "/vegtables/tomato.jpg"
      ];
      
      
    // const[cart,setCart]=useState([]);

    // const handleCart = (e) => {
    //   e.preventDefault();
    //   const newCartItem = { qnty: Qnty };
  
    //   setCart((prevCart) => {
    //       const updatedCart = [...prevCart, newCartItem];
    //       console.log(updatedCart); // Logs correct updated cart
    //       return updatedCart;
    //   });
  
    //   setAdded(true);
    //   // setTimeout(() => {
    //   //     setAdded(false);
    //   // }, 2000);
    // };


    const handleCart = () => {
        alert("Added to cart");
    };

    return (
        <div className="relative m-8 p-6">
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md z-10 ml-2"
            >
                <FaChevronLeft size={20} />
            </button>
            <div ref={scrollRef} className="flex overflow-x-auto whitespace-nowrap scrollbar-hide w-full p-2">
                <div className="flex w-max space-x-16">
                    {imgurl.map((url, index) => (
                        <ProductLayout key={index} imgurl={url}/>
                    ))}
                </div>
            </div>
            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md z-10"
            >
                <FaChevronRight size={20} />
            </button>
        </div>
    );
};

export default Products;
