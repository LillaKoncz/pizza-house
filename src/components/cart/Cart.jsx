import React, {useContext} from 'react'
import {Nav} from '../nav/Nav'
import { CartItem } from './CartItem'
import FOOD from '../../assets/FOOD'
import { ShopContext } from '../shop-context/ShopContext'
import './Cart.css'



export const Cart = () => {
  const {addToCart, cart} = useContext(ShopContext); 

 
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
        <p>TOTAL</p> <p> DKK </p>
      </div> 
      <div className='order-button'><button className='order'>Order</button></div>

    </div>
    
    </>
  )
}
