import React from 'react'
import { Nav } from '../nav/Nav'
import './Menu.css'
import PIZZAS from '../../assets/PIZZA'
import {MenuItem} from './MenuItem'




export const Menu = () => {
  return (
    <>
      <Nav />

      <div className='menu-title'>
        <h1>MENU</h1>
      </div>


        {/*ha a pizzaval megy, utana megnezzuk h kell a tobbivel*/}   
      <div className='foods-box'>{PIZZAS.map((pizza)=>(
        <MenuItem data={pizza}/>
      ))}</div>

      <div className='box'></div>
    </>
  )
}
