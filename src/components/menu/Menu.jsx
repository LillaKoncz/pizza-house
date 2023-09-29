import React from 'react'
import { Nav } from '../nav/Nav'
import './Menu.css'
import PIZZAS from '../../assets/PIZZA'




export const Menu = () => {
  return (
    <>
      <Nav />

      <div className='menu-title'>
        <h1>MENU</h1>
      </div>


        {/*ha a pizzaval megy, utana megnezzuk h kell a tobbivel*/}   
      <div className='foods-box'>FLEXBOX for pizza pasta salat drinks icons</div>
      <div className='box'> ide jonnek a kajak</div>
    </>
  )
}
