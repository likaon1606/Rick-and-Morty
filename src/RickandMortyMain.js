import React, { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';
import LocationInfo from './components/LocationInfo';
import ResidentsList from './components/ResidentsList';
import axios from 'axios';


const RickandMortyMain = () => {

  const [ character, setCharacter ] = useState({});

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}/`)
      .then((res) => setCharacter(res.data));
  },[])

  return (
    <div className='content-main'>
       <div className='BackgroundHeader'>
        <SearchBox className='boxSearch' setCharacter={setCharacter}/>
        
        <LocationInfo/>
        <h1 className='location'>
          <span>Location: </span>{character?.name}
        </h1>
        <ResidentsList residents={character.residents} />
        </div>
    </div>
  )
}

export default RickandMortyMain