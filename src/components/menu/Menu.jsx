import React from 'react'
import { Nav } from '../nav/Nav'
import './Menu.css'
import PIZZAS from '../../assets/PIZZA'
import {MenuItem} from './MenuItem'
import background from '../../images/background.jpg'





export const Menu = () => {
  return (
    <div>
      <Nav />

      <div className='menu-title'>
        <h1>MENU</h1>
      </div>


       
      <div className='pizza-box '>{PIZZAS.map((pizza)=>(
        <MenuItem data={pizza} />
      ))}</div>

      <div className='box'></div>
    </div>
  )
}
