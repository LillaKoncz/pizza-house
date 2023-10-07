import React from 'react'
import {Nav} from '../nav/Nav'
import { CartItem } from './CartItem'


export const Cart = () => {

  return (
    <>
    <Nav />
    <div className='cart-wrapper m-5'>
      <div className='cart-title'><h1>Your cart</h1></div>

      <div className='cart-items'> {/*flexbox nev es ar egymas mellett*/}
        <div>Cart items </div>
        <div>Cart items price</div>
      </div>

      <div className='total-price'> Total price</div> {/*jobb oldalt a price alatt*/}
      <div className='order-button'><button>Order</button></div>

    </div>
    
    </>
  )
}
