import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

  const cart=useSelector((state)=>(state.cartdetails.cart));
  console.log(cart[0].product);
  return (
    <div className='flex justify-center m-10'>
      <h1>Cart Details</h1>
      <div>
        {cart.map((data,ind)=>(
          <div key={ind}>
            <h1>{data.product}</h1>
            <h1>{data.qnty}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart