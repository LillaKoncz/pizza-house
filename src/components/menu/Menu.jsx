import React from 'react'
import { Nav } from '../nav/Nav'
import './Menu.css'
import FOOD from '../../assets/FOOD'
import {MenuItem} from './MenuItem'
import background from '../../images/background.jpg'
import drinky from '../../images/icons/drinks-icon.png'
import hamburger from '../../images/icons/hamburger-icon.png'
import pommes from '../../images/icons/pommes-icon.png'
import pizza from '../../images/icons/pizza-icon.png'
import AnchorLink from "react-anchor-link-smooth-scroll";



export const Menu = () => {

const pizzas = FOOD.slice(0,14);
const hamburgers = FOOD.slice(14,20);
const fries = FOOD.slice(20,22);
const drinks = FOOD.slice(22,28);
const sauces = FOOD.slice(28,33);

  return (
    <div className='background-menu'>
      <Nav />
      <div className='menu-title'>
        <AnchorLink href='#pizza'><img className='menu-icon' src={pizza} width='70px'/></AnchorLink> 
        <AnchorLink href='#hamburger'><img className='menu-icon' src={hamburger} width='70px'/></AnchorLink>
        <AnchorLink href='#fries'><img className='menu-icon'src={pommes} width='70px'/></AnchorLink>  
         <AnchorLink href='#drinks'><img className='menu-icon'src={drinky} width='70px'/></AnchorLink> 
      </div>


    <div className='menu-container'>
        
        <div className='container'>
          <div className='food-title'><h1 id='pizza'>Pizza</h1></div> 
            <div className='food-box'>
              {pizzas.map((pizza) => (<MenuItem data={pizza} key={pizza.id} />))}
            </div>
        </div>
    </div>


      <div className="container">
        <div className='food-title'><h1 id='hamburger'>Hamburger</h1></div> 
          <div className='food-box'>
            {hamburgers.map((hamburger) => (<MenuItem data={hamburger} key={hamburger.id} />))}
      </div>
    </div>


      <div className="container">
        <div className='food-title'><h1 id='fries'>Fries</h1></div> 
          <div className='food-box'>
            {fries.map((fries) => (<MenuItem data={fries} key={fries.id} />))}
        </div>
      </div>

      <div className="container">
        <div className='food-title'><h1 id='drinks'>Drinks</h1></div> 
          <div className='food-box'>
            {drinks.map((drink) => (<MenuItem data={drink} key={drink.id} />))}
        </div>
      </div>

      <div className="container">
          <div className='food-title'><h1>Dips</h1></div> 
            <div className='food-box'>
              {sauces.map((sauce) => (<MenuItem data={sauce} key={sauce.id} />))}
          </div>
      </div>

</div>





    
  )
}

/*

const pizzas = FOOD.slice(0,14);
const hamburgers = FOOD.slice(15,21);
const fries = FOOD.slice(22,23);
const drinks = FOOD.slice(24,29);
const sauces = FOOD.slice(30,32);


<div className='background-menu'>
      <Nav />
      <div className='menu-title'>
        <AnchorLink href='#pizza'><img className='menu-icon' src={pizza} width='70px'/></AnchorLink> 
        <AnchorLink href='#hamburger'><img className='menu-icon' src={hamburger} width='70px'/></AnchorLink>
        <AnchorLink href='#fries'><img className='menu-icon'src={pommes} width='70px'/></AnchorLink>  
         <AnchorLink href='#drinks'><img className='menu-icon'src={drinks} width='70px'/></AnchorLink> 
      </div>


      <div className='menu-container'>
        <div className='container'>
          <div className='food-title'><h1 id='pizza'>Pizza</h1></div> 
          <div className='food-box'>
          {pizzas.map((pizza) => (<MenuItem data={pizza} key={pizza.id} />))}
          </div>

        
          </div>
      </div>


      <div className="container">
      <div className='food-title'><h1 id='hamburger'>Hamburger</h1></div> 
      <div className='food-box'>
       
      </div>
    </div>


        <div className="container">
      <div className='food-title'><h1 id='fries'>Fries</h1></div> 
      <div className='food-box'>
      
      </div>
      </div>

        <div className="container">
      <div className='food-title'><h1 id='drinks'>Drinks</h1></div> 
      <div className='food-box'>
      
      </div>
      </div>

      <div className="container">
      <div className='food-title'><h1>Dips</h1></div> 
      <div className='food-box'>

</div>
</div>
</div>*/