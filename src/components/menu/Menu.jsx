import React from 'react'
import { Nav } from '../nav/Nav'
import './Menu.css'
import PIZZAS from '../../assets/PIZZA'
import DRINKS from '../../assets/DRINK'
import POMMES from '../../assets/POMMES'
import HAMBURGERS from '../../assets/HAMBURGER'
import SAUCES from '../../assets/SAUCE'
import {MenuItem} from './MenuItem'
import background from '../../images/background.jpg'
import drinks from '../../images/icons/drinks-icon.png'
import hamburger from '../../images/icons/hamburger-icon.png'
import pommes from '../../images/icons/pommes-icon.png'
import pizza from '../../images/icons/pizza-icon.png'





export const Menu = () => {
  return (
    <div className='background-menu'>
      <Nav />
      <div className='menu-title'>
          <img className='menu-icon' src={pizza} width='70px'/>
          <img className='menu-icon' src={hamburger} width='70px'/>
          <img className='menu-icon'src={pommes} width='70px'/>
          <img className='menu-icon'src={drinks} width='70px'/>
      </div>


      <div className='menu-container'>
        <div className='container'>
          <div className='food-title'><h1>Pizza</h1></div> 
          <div className='food-box'>{PIZZAS.map((pizza)=>(
          <MenuItem data={pizza} key={pizza.id} />
      ))}</div>
      </div>


      <div className="container">
      <div className='food-title'><h1>Hamburger</h1></div> 
      <div className='food-box'>
      {HAMBURGERS.map((hamburger) => (
        <MenuItem data={hamburger} key={hamburger.id} />
      ))}</div>
      </div>


        <div className="container">
      <div className='food-title'><h1>Fries</h1></div> 
      <div className='food-box'>
      {POMMES.map((pommes) => (
        <MenuItem data={pommes} key={pommes.id}/>
      ))}</div>
      </div>

        <div className="container">
      <div className='food-title'><h1>Drinks</h1></div> 
      <div className='food-box'>
      {DRINKS.map((drink)=>(
        <MenuItem data={drink} key={drink.id}/>
      ))}</div>
      </div>

      <div className="container">
      <div className='food-title'><h1>Dips</h1></div> 
      <div className='food-box'>{SAUCES.map((sauce)=>(
        <MenuItem data={sauce} key={sauce.id}/>
        ))}</div>
        </div>
        </div>
</div>
  )
}
