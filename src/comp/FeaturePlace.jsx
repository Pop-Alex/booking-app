import React,{useContext} from 'react'
import {PlaceContext} from '../context'
const FeaturePlace = () => {
    const {featurePlace} = useContext(PlaceContext)
   console.log(featurePlace)
  return (
    <div className='feature'>
      {featurePlace?.map((item)=>{
        return (
          <div className='feature-info'>
          <article >
            <img src={item.img} alt="imgs" />
            <p>{item.name}</p>
            </article>
          </div>
        )
      })}
    </div>
  )
}

export default FeaturePlace
