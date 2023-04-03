import React from 'react'
import Hero from '../comp/Hero'
import Banner from '../comp/Banner'
import {Link} from 'react-router-dom'
import Hotels from '../comp/Hotels'
const Places = () => {
  return (
    <>
    <Hero hero="placesHero">
      <Banner>
        <Link to='/' className='btn-home-places'>Home</Link>
      </Banner>
    </Hero>
      <Hotels/>
    </>
  )
}

export default Places
