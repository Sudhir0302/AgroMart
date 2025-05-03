import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const Protected = () => {
  const user = useSelector((state) => state.login.user);
  const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate('/');
//     }
//   }, [user, navigate]);

    // console.log(user);

    if(!user){
       return <Navigate to='/' />
    }

    return <Outlet />;
};

export default Protected;
