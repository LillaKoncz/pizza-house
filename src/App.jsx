import { useState } from 'react'
import './App.css'
import {Home} from './components/home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Menu} from './components/menu/Menu'
import {Cart} from './components/cart/Cart'
import {Order} from './components/order/Order'
import {Nav} from './components/nav/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PizzaDetails } from './components/details/PizzaDetails';
import { ShopContextProvider } from './components/shop-context/ShopContext';

function App() {
 

  return (
  <>
   <ShopContextProvider>
      <Router>
      <div>
      <Routes>
        <Route path='/pizza-house/'element={<Home />} />
        <Route path='/pizza-house/menu' element={<Menu />} />
        <Route path='/pizza-house/cart' element={<Cart />} />
        <Route path='/pizza-house/order' element={<Order/>} />
        <Route path='/pizza-house/details/:id' element={<PizzaDetails/>} />
      </Routes>
      </div>
    </Router>
  </ShopContextProvider>
  
  </>
  )
}

export default App
