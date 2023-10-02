import React from 'react'
import { Nav } from '../nav/Nav'
import './Menu.css'
import PIZZAS from '../../assets/PIZZA'
import {MenuItem} from './MenuItem'
import background from '../../images/background.jpg'
import drinks from '../../images/icons/drinks-icon.png'
import hamburger from '../../images/icons/hamburger-icon.png'
import pommes from '../../images/icons/pommes-icon.png'
import pizza from '../../images/icons/pizza-icon.png'





export const Menu = () => {
  return (
    <div>
      <Nav />
      <div className='menu-title'>
          <img className='menu-icon' src={pizza} width='70px'/>
          <img className='menu-icon' src={hamburger} width='70px'/>
          <img className='menu-icon'src={pommes} width='70px'/>
          <img className='menu-icon'src={drinks} width='70px'/>
      </div>


       
      <div className='pizza-box '>{PIZZAS.map((pizza)=>(
        <MenuItem data={pizza} key={pizza.id} />
      ))}</div>

      <div className='box'></div>
    </div>
  )
}
