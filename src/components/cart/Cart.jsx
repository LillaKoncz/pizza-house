import React, {useContext} from 'react'
import {Nav} from '../nav/Nav'
import { CartItem } from './CartItem'
import FOOD from '../../assets/FOOD'
import { ShopContext } from '../shop-context/ShopContext'
import './Cart.css'
import { Order } from '../order/Order'
import { useNavigate } from 'react-router-dom'



export const Cart = () => {
  const {addToCart, cart, getTotalPrice} = useContext(ShopContext); 

 const navigate = useNavigate();
 const totalAmount = getTotalPrice();

 const handleNavigate = () => {
 navigate('/pizza-house/order')}

  return (
    <>
    <Nav />
    <div className='cart-wrapper m-5'>
      <div className='cart-title'><h1>Your Order</h1></div>

      <div className='cart-items-wrapper'> {/*flexbox nev es ar egymas mellett*/}
        <div className='cart-items'>{FOOD.map((food) => {
          if(cart[food.id] !== 0) {
             return <CartItem data={food} key={food.id} food={food}/>
          }
        })}</div>
        
      </div>

      <div className='total-price'>
        <p>TOTAL</p> <p>{totalAmount} DKK</p>
      </div> 
      <div className='order-button'><button onClick={handleNavigate} className='order'>Order</button></div>

    </div>
    
    </>
  )
}
