import React from 'react'
import { useParams } from 'react-router-dom'
import FOOD from '../../assets/FOOD'
import './pizzaDetails.css'
import {Nav} from '../nav/Nav'
import {ShopContext} from '../shop-context/ShopContext'
import { useContext } from 'react'



export const PizzaDetails = () => {
    const { id } = useParams();
    const {addToCart, removeFromCart, cart} = useContext(ShopContext); 

    const cartAmount = cart[id];



  // Find the selected item based on id
  let selectedItem;
  if (parseInt(id) >= 1 && parseInt(id) <= 14) {
    selectedItem = FOOD.find(pizza => pizza.id === parseInt(id));
  } else if (parseInt(id) >= 15 && parseInt(id) <= 21) {
    selectedItem = FOOD.find(hamburger => hamburger.id === parseInt(id));
  } else if (parseInt(id) >= 22 && parseInt(id) <= 23) {
    selectedItem =FOOD.find(pommes => pommes.id === parseInt(id));
  } else if (parseInt(id) >= 24 && parseInt(id) <= 29) {
    selectedItem = FOOD.find(drinks => drinks.id === parseInt(id));
  } else if (parseInt(id) >= 30 && parseInt(id) <= 32) {
    selectedItem = FOOD.find(sauce => sauce.id === parseInt(id));
  } else {
    selectedItem = null;
  }

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <>
     <Nav />
    <div className='food'>
      
      <div className="food-img py-5">
         <img src={selectedItem.image}  alt={selectedItem.name} />
      </div>
       <div className='wrapper'>
      <div className="infos mx-5"> 
        <h1>{selectedItem.name}</h1>
        <div className='buttons'>
          <button className='plus' onClick={() => addToCart(id)}>+</button>
          <div className='input'>{cartAmount > 0 && <>{cartAmount}</> }</div>
          <button className='minus' onClick={() => removeFromCart(id)}>-</button>
        </div>
         
      </div>

      <div className="text mx-5">
        <p>{selectedItem.description}</p>
      </div>

      <div className='price-button mx-5'> 
        <h2>{selectedItem.price} DKK</h2>
        <button onClick={() => addToCart(id)}>Add to Cart {cartAmount > 0 && <>({cartAmount})</> } </button>
      </div>
      </div>
    </div>
    </>
  );
};

