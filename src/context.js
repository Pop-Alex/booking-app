import React, { useEffect, useState } from 'react'
import data from './data'

 export const PlaceContext = React.createContext()

export const PlaceProvider = ({children}) => {
    const [hotel,setHotel] = useState([])
    const [featurePlace,setFeaturePlace] = useState([])
     
    
 useEffect(()=>{
    let feature = data.filter(place => place.featured === true)
        setFeaturePlace(feature)
 },[])
    
    const getType = (type)=>{
        let temp = [...hotel]
        const hotel = temp.find(hotel =>hotel.type === type)
        return hotel;
    }
    console.log(featurePlace)
    return (
        <PlaceContext.Provider  value={{featurePlace,getType}}>
            {children}
        </PlaceContext.Provider>
    )

}

