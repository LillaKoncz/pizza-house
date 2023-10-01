import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PIZZAS from '../../assets/PIZZA'



export const PizzaDetails = () => {
    const { id } = useParams();

      //Find the selected pizza by id
    const selectedPizza = PIZZAS.find(pizza => pizza.id ===parseInt(id));

  return (
    <div>
        <h1>{selectedPizza.name}</h1>
        <img src={selectedPizza.image} width='300px'/>
    </div>
  )
}
