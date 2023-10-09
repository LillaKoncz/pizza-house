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
      <div className='cart-title'><h1>Your cart</h1></div>

      <div className='cart-items'> {/*flexbox nev es ar egymas mellett*/}
        <div className='cart-items'>{FOOD.map((food) => {
          if(cart[food.id] !== 0) {
             return <CartItem data={food} key={food.id} food={food}/>
          }
        })}</div>
        <div>Cart items price</div>
      </div>

      <div className='total-price'> Total price</div> {/*jobb oldalt a price alatt*/}
      <div className='order-button'><button>Order</button></div>

    </div>
    
    </>
  )
}
