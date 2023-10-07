import React,{ createContext, useState} from 'react'
import FOOD from '../../assets/FOOD'

const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = [];
    for (let i = 1; i <=FOOD.length; i++) {
        cart[i] = 0;
}
    return cart;
}


export const ShopContextProvider = (props) => {
    const [cart, setCart] = useState(getDefaultCart());


    const addToCart = () => {
        setCart((prev)=>({...prev, [itemId]:prev[itemId] + 1}));
    }

    const removeFromCart = () => {
        setCart((prev)=>({...prev, [itemId]:prev[itemId] - 1}));
    }

    const contextValue = { cart, addToCart, removeFromCart}

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
