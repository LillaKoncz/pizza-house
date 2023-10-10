import React, {useContext} from 'react'
import './Cart.css'
import { ShopContext } from '../shop-context/ShopContext';


export const CartItem = (props) => {
  const {id, name, image, price, description} = props.data;
  const {addToCart, removeFromCart, cart} = useContext(ShopContext); 

  const cartAmount = cart[id];

  return (
    <div className='cart-item'>
      <div className='img-and-name'>
        <img src={image} width='80px'/><p className='item-name'>{name} {cartAmount}x</p>
      </div> 
       <div><p className='item-price'>{price} DKK</p></div> 
     </div>
  )
}
