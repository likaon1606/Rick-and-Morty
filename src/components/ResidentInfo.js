import React, { useState, useEffect, } from 'react';
import axios from 'axios';

const ResidentInfo = ({residentUrl}) => {

  const [ resident, setResident ] = useState({});

  useEffect(() => {
    axios.get(residentUrl).then((res) => setResident(res.data));
  },[residentUrl] )
  console.log(residentUrl)
  return (
    <div className='cards'>
      <h3>{resident.name}</h3>
      <img src={resident.image} alt=""/>
      <p><span>Status: </span>{resident.status}</p>
      <p><span>Name: </span>{resident.origin?.name}</p>
      <p><span>Episodes: </span>{resident.episode?.length}</p>
    </div>
  )
}

export default ResidentInfo