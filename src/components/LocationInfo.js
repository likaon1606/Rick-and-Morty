import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'animate.css';


export const LocationInfo = () => {

  const [location, setLocation] = useState({})

useEffect(() => {
  const random = Math.floor(Math.random() * 126) + 1
   
  axios.get(`https://rickandmortyapi.com/api/location/${random}`)
    .then(res => setLocation(res.data))
  }, [])
  console.log(location)
  return (
  
    <div className='styleLoc animate__animated animate__bounce'>
      <h1>Location Info</h1>
      <p><span>Universe: </span>{location.name}</p>
      <p><span>Type: </span>{location.type}</p>
      <p><span>Dimension: </span>{location.dimension}</p>
      <p><span>Residents: </span>{location.residents?.length}</p>
    </div>
  )
}

export default LocationInfo