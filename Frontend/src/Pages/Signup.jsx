import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { setUsers } from '../slices/userSlice';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Signup = () => {

    const navigate=useNavigate();

    // const dispatch=useDispatch();

    const[userdetails,setUserdetails]=useState({
        username:"",
        email:"",
        phoneno:"",
        password:"",
    });

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setUserdetails((prev)=>({
            ...prev,
            [name]:value,
        }))
    }

    const handleSignup=(e)=>{
        e.preventDefault();

        const signup=async() =>{
            const res=await axios.post("http://localhost:8080/users1",userdetails);
            if(res){
                navigate('/');
            }else{
                // invalid credentialss...      
            }
        }
        signup();
        setUserdetails({
            username:"",
            email:"",
            phoneno:"",
            password:"",
        });
    }
    
    return (
        <div className="flex flex-col items-center h-screen p-56">
            <div className='w-fit p-10 bg-gray-200 rounded-xl'>
                <h1 className='text-2xl text-center'>Signup</h1><br></br>
                <form onSubmit={handleSignup}>
                    <div className="flex flex-col gap-3 items-center">
                        <div className="flex items-center gap-2">
                            <label className="w-32">Username</label>
                            <input 
                                type="text" 
                                className="border p-1"
                                name="username"
                                value={userdetails.username}
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="w-32">email</label>
                            <input 
                                type="email" 
                                className="border p-1"
                                name="email"
                                value={userdetails.email}
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="w-32">Phone.no</label>
                            <input 
                                type="number"
                                className="border p-1"
                                name="phoneno"
                                value={userdetails.phoneno}
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <label className="w-32">Password</label>
                            <input 
                                type="password" 
                                className="border p-1"
                                name="password"
                                value={userdetails.password}
                                onChange={handleChange} 
                                />
                        </div>
                        {/* <div className="flex items-center gap-2">
                            <label className="w-32">Confirm Password</label>
                            <input 
                                type="password" 
                                className="border p-1"
                            />
                        </div> */}
                        <button 
                            className='bg-blue-400 rounded-sm p-2 w-32 mt-3'
                            onClick={handleSignup}
                        >
                            create account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup