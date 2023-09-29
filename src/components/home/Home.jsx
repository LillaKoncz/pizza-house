import {React, useEffect} from 'react'
import './Home.css'
import background from '../../images/background.jpg'
import Lottie from 'lottie-react'
import pizza from '../../assets/pizza-slice.json'
import {useNavigate} from 'react-router-dom'



export const Home = () => {

const navigate = useNavigate();



  return (
<>
    <div className='home-background'>
        <div className='title-home'>
            <h1>Tony's Pizzeria</h1>
        </div>

       
        <div className='lotti-animation'>
        <h5 className='click-menu'>See our Menu</h5>
          <button 
          className='button'
          onClick={() => navigate('/pizza-house/menu')}>
            <Lottie 
          className='lotti-pizza'
          animationData={pizza} 
          loop={true} /></button>
        </div>
    </div>
    </>
  )
}
