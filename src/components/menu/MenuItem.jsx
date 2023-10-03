import React from 'react'
import './Menu.css'
import { useNavigate } from 'react-router-dom'


export const MenuItem = (props) => {
const {id, name, image, price, description} = props.data

const navigate = useNavigate();

const handleNavigate = () => {
  navigate(`/pizza-house/details/${id}`)
}

  return (
    <>
    <div className='pizzas'>
      <div className='pizzaNameandImg'>
        <img 
        onClick={handleNavigate}
        className='pizza-img'
         width='300px' 
         src={image} />
        <div>{name}</div>
      </div>
    </div>
    </>
  )
}
