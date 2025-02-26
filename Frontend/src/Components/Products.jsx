import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import ProductLayout from './ProductLayout';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../slices/cartSlice';
import { updateUserCart } from '../slices/loginSlice';
import axios from 'axios';

const Products = () => {
    
    const dispatch=useDispatch();

    const user=useSelector((state)=>state.login.user);
    let username="";
    if(user){
         username=user.username;
    }
    
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


    const cart = useSelector(state => state.cartdetails.cart);

    const[Added,setAdded]=useState(false);

    const handleCart = (product, qnty) => {

        const addcart=async()=>{
            const res=axios.put("http://localhost:8080/cart/addcart",{product,qnty,username});
            if(res){
                setAdded(true);
            }
            console.log(res);
        }
        addcart();
        dispatch(setCart({product,qnty,username}))

    };

    useEffect(() => {
        console.log("Cart Updated:", cart);
    }, [cart]);
    
    const imgurl = [
        { 
            name:"carrot",
            url:"/vegtables/carrot.jpg"
        },
        { 
            name:"cauliflower",
            url:"/vegtables/cauliflower.jpg"
        },
        {
            name:"ladiesfinger",
            url:"/vegtables/ladiesfinger.png"
        },
        { 
            name:"onion",
            url:"/vegtables/onion.png"
        },
        { 
            name:"papaya",
            url:"/vegtables/papaya.jpg"
        },
        { 
            name:"pine",
            url:"/vegtables/pine.jpg"
        },
        { 
            name:"potato",
            url:"/vegtables/potato.jpg"
        },
        { 
            name:"tomato",
            url:"/vegtables/tomato.jpg"
        }
    ];

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
                    {imgurl.map((data, index) => (
                        <ProductLayout key={index} data={data} handleCart={handleCart} Added={Added}/>
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
