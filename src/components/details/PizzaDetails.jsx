import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PIZZAS from '../../assets/PIZZA'
import HAMBURGERS from '../../assets/HAMBURGER'
import POMMES from '../../assets/POMMES'
import DRINKS from '../../assets/DRINK'
import SAUCES from '../../assets/SAUCE'



export const PizzaDetails = () => {
    const { id } = useParams();

  // Find the selected item based on id
  let selectedItem;
  if (parseInt(id) >= 1 && parseInt(id) <= 14) {
    selectedItem = PIZZAS.find(pizza => pizza.id === parseInt(id));
  } else if (parseInt(id) >= 15 && parseInt(id) <= 21) {
    selectedItem = HAMBURGERS.find(hamburger => hamburger.id === parseInt(id));
  } else if (parseInt(id) >= 22 && parseInt(id) <= 23) {
    selectedItem = POMMES.find(pommes => pommes.id === parseInt(id));
  } else if (parseInt(id) >= 24 && parseInt(id) <= 29) {
    selectedItem = DRINKS.find(drinks => drinks.id === parseInt(id));
  } else if (parseInt(id) >= 30 && parseInt(id) <= 32) {
    selectedItem = SAUCES.find(sauce => sauce.id === parseInt(id));
  } else {
    selectedItem = null;
  }

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <div className='pizzas'>
      <h1>{selectedItem.name}</h1>
      <img src={selectedItem.image} width='300px' alt={selectedItem.name} />
    </div>
  );
};