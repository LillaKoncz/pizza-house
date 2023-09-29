import {React, useEffect} from 'react'
import './Home.css'
import background from '../../images/background.jpg'
import Lottie from 'lottie-react'
import pizza from '../../assets/pizza-slice.json'


export const Home = () => {


  return (
    <div className='home-background'>
        <div className='title-home'>
            <h1>Tony's Pizzeria</h1>
        </div>

       
        <div className='lotti-animation'>
        <h5 className='click-menu'>See or Menu</h5>
          <Lottie 
          className='lotti-pizza'
          animationData={pizza} 
          loop={true} />
        </div>
    </div>
  )
}
