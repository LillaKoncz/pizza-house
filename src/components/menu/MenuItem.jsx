import React from 'react'


export const MenuItem = (props) => {
const {id, name, image, price, description} = props.data

  return (
    <>
    
    <div><img className='pizza-img' width='300px' src={image} /></div>
    <div>{name}</div>
    </>
  )
}
