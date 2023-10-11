import React from 'react'
import './Order.css'
import { Nav } from '../nav/Nav';

export const Order = () => {

const orderNumber = Math.floor(Math.random() * 999);

  return (
    <>
    <Nav/>
    <div className='order-wrap'>
        <h1 className='order-h1'>Thanks for<br/> Your Order!</h1>
        <p className=' order-p py-2'>Your order number is : 0{orderNumber} </p>
    </div>
  </>
  )
}
