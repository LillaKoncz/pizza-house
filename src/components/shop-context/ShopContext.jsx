import React,{ createContext, useState} from 'react'
import FOOD from '../../assets/FOOD'

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


    const addToCart = (itemId) => {
        setCart((prev)=>({...prev, [itemId]:prev[itemId] + 1}));
    }

    const removeFromCart = (itemId) => {
        setCart((prev)=>({...prev, [itemId]:prev[itemId] - 1}));
    }

    const contextValue = { cart, addToCart, removeFromCart}




  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
