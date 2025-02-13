import React, { useState } from 'react';

const Login = () => {

    const[user,setUser]=useState();
    const[password,setPassword]=useState();

    return (
        <div className="flex flex-col items-center h-screen p-56 bg-black">
            <div className='w-fit p-10 bg-gray-200 rounded-xl'>
                <h1 className='text-2xl text-center'>Login</h1><br></br>
                <div className="flex flex-col gap-3 items-center">
                    <div className="flex items-center gap-2">
                        <label className="w-32">Username/Email</label>
                        <input 
                            type="text" 
                            className="border p-1" 
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="w-32">Password</label>
                        <input 
                            type="password" 
                            className="border p-1" 
                        />
                    </div>
                    <button className='bg-blue-400 rounded-sm p-2 w-28 mt-3'>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
