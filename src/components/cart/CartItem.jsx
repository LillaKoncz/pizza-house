import React from 'react'
import './Cart.css'


export const CartItem = (props) => {
  const {id, name, image, price, description} = props.data;

  return (
    <div className='cart-item'>
      <img src={image} width='80px'/>
       <div><h5 className='item-name'>{name}</h5></div> 
       <div><h5 className='item-price'>{price} DKK</h5></div> 
     </div>
  )
}
