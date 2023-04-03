import React from 'react'
import './compStyle.css'
const Banner = ({children}) => {
  return (
    <div className='banner'>
      <h1>Luxurious places</h1>
      <div></div>
        <p>Deluxe rooms</p>
        {children}
      
    </div>
  )
}

export default Banner
