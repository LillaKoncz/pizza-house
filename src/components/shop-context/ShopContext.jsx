import React,{ createContext, useState} from 'react'
import FOOD from '../../assets/FOOD'
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';

 export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = [];
    for (let i = 1; i <=FOOD.length + 1; i++) {
        cart[i] = 0;
}
    return cart;
}


export const ShopContextProvider = (props) => {
    const [cart, setCart] = useState(getDefaultCart());

    const getTotalPrice = () => {
        let totalmount = 0;
        for(const item in cart) {
            if(cart[item] > 0){
              let itemInformation  = FOOD.find((food) => food.id === Number(item));
              totalmount += cart[item] * itemInformation.price;
            }
    }
    return totalmount;
}

    const addToCart = (itemId) => {
        setCart((prev)=>({...prev, [itemId]:prev[itemId] + 1}));
    }

    const removeFromCart = (itemId) => {
        setCart((prev)=>({...prev, [itemId]:prev[itemId] - 1}));
    }

    const contextValue = { cart, addToCart, removeFromCart, getTotalPrice}




  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
