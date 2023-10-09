import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useContext } from'react';
import { ShopContext } from '../shop-context/ShopContext';
import FOOD from '../../assets/FOOD';
import { useParams } from 'react-router-dom'




export const Nav = () => {
  const { id } = useParams();
  const back = useNavigate();
  const {cart} = useContext(ShopContext);

  const filledCart = cart[id];




  const handleGoBack = () => {
    back(-1);
  };

    return (
    <>
    <nav className='nav'>
            <li><Link className='nav-links' to='/pizza-house/'></Link></li>
            <li><Link className='nav-links' to='/pizza-house/menu'><FontAwesomeIcon icon={faUtensils} /></Link></li>
            <li><Link className={`nav-links ${filledCart > 0 ? 'red-link' : '' }`} to='/pizza-house/cart'><FontAwesomeIcon icon={faCartShopping}/></Link></li>
            <li><Link className='nav-links'to='/pizza-house/order'></Link></li>    
            
    </nav>
    <button className='back'
    onClick={handleGoBack}> <FontAwesomeIcon icon={faArrowLeft} /></button>
    </>
  )
}
