import React from 'react'
import Hero from '../comp/Hero'
import Banner from '../comp/Banner'
import {Link} from 'react-router-dom'
import Services from '../comp/Services'
import FeaturePlace from '../comp/FeaturePlace'
const Home = () => {
  return (
    <>
    <Hero >
      <Banner>
      <Link to='/places' className='btn-home-places'>Places</Link>
      </Banner>
      
    </Hero>
    <Services/>
    <FeaturePlace/>
  </>
  )
}

export default Home

