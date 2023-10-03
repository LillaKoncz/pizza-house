import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PIZZAS from '../../assets/PIZZA'
import HAMBURGERS from '../../assets/HAMBURGER'
import POMMES from '../../assets/POMMES'
import DRINKS from '../../assets/DRINK'
import SAUCES from '../../assets/SAUCE'
import './PizzaDetails.css'



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
    <>
    <div className='food'>
      
      <div className="food-img py-5">{/*ez legyen hangsulyos, kozepen*/}
         <img src={selectedItem.image} width='500px' alt={selectedItem.name} />
      </div>
       
      <div className="infos mx-5"> {/*flexbox */}
        <h1>{selectedItem.name}</h1>
        <div className='buttons'>
          <button className='plus'>+</button>
          <input className='input'></input>{/*ezek jobb oldalt lesznek*/}
          <button className='minus'>-</button>
        </div>
         
      </div>

      <div className="text mx-5">
        <p>{selectedItem.description}</p>
      </div>

      <div className='price-button mx-5'> {/*flexbox bal oldalt ar jobb oldalt button*/}
        <h2>{selectedItem.price}</h2>
        <button>Add to Cart</button>
      </div>
    </div>
    </>
  );
};