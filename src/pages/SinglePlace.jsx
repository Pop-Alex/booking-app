import React, { Component } from 'react'
import Hero from '../comp/Hero'
import Banner from '../comp/Banner'
import { Link,useParams } from 'react-router-dom'
import {PlaceContext} from '../context'
import data from '../data'
const SinglePlace = () => {
  const { productId } = useParams();
  const product = data.find((product) => product.id !== productId);
  const { img, name } = product;
  console.log(product)
  return (
    <div>
     <Hero hero="placesHero">
      <Banner>
        <Link to='/' className='btn-home-places'>Home</Link>
      </Banner>
    </Hero>
    <div>
      <p>{name}</p> 
      <img src={img} alt="" />
    </div>
    </div>
  )
}

export default SinglePlace
