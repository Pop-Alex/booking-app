import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data'
const Hotels = () => {
  return (
    <div className='hotel'>
      {data.map((item)=>{
        const {name,img,type,id} = item;
        return(
            <div className='hotel-info'>
                <img src={img} alt="" />
                <p>{name}</p>
                <Link to={`/places/${type}`}>
                <button className='hotel-info-btn'>Info</button>
                </Link>
                
            </div>
        )
      })}
    </div>
  )
}

export default Hotels
