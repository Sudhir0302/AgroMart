import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setLogin } from '../slices/loginSlice';
import { setCart } from '../slices/cartSlice';

const Login = () => {

    const[user,setUser]=useState("");
    const[password,setPassword]=useState("");
    const[msg,setMsg]=useState(null);
    const[isLogin,setIsLogin]=useState(false);

    const navigate=useNavigate();

    const dispatch=useDispatch();
 
    const fetch=async(user)=>{
        const res=await axios.get("http://localhost:8080/cart/getcart", {
        params: { username: user }, 
        });
        console.log(res.data);
        if(res){
        // dispatch(setCart(res));
        let data=res.data;
        data.map((item)=>{
            dispatch(setCart(item));
            console.log((parseFloat)(item.qnty));
        })
        }   
    }

    const handleLogin=(e)=>{
        e.preventDefault();
        // alert("login");
        const login=async()=>{
            try {
                const res=await axios.put("http://localhost:8080/users",{
                    username:user,
                    password:password
                });
                if(res.status===200){
                    console.log(res.data);
                    fetch(res.data.username);
                    setIsLogin(true);
                    // dispatch(setUser(res.data));
                    dispatch(setLogin(res.data));
                    // setIsLogin(true);
                    navigate('/home');
                }
            } catch (error) {
                setMsg("Invalid...")
                console.error("Login failed", error);
            }
        }
        login();
    }
    return (
        <div className="flex flex-col items-center h-screen p-56">
            <div className='w-fit p-10 bg-gray-200 rounded-xl'>
                <h1 className='text-2xl text-center'>Login</h1><br></br>
                <div className="flex flex-col gap-3 items-center">
                    <div className="flex items-center gap-2">
                        <label className="w-32">Username/Email</label>
                        <input 
                            type="text" 
                            className="border p-1"
                            value={user}
                            onChange={(e)=>setUser(e.target.value)} 
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="w-32">Password</label>
                        <input 
                            type="password" 
                            className="border p-1" 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)} 
                        />
                    </div>
                    <h2 className='text-red-800 text-xl'>{msg}</h2>
                    <button 
                        className='bg-blue-400 rounded-sm p-2 w-28 mt-3'
                        onClick={handleLogin}   
                    >
                        Login
                    </button>
                </div>
                <button onClick={()=>navigate('/Signup')}>Signup ?</button>
            </div>
        </div>
    );
}

export default Login;
