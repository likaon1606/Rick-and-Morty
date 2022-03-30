import React from "react";
import { useState } from "react";
import axios from "axios";


const SearchBox = ({ setCharacter }) => {
  const [search, setSearch] = useState("");

  const searchType = () => {
    // Hacemos la petición con el id que haya
    // colocado el usuario en el input
    axios
      .get(`https://rickandmortyapi.com/api/location/${search}/`)
      .then((res) => setCharacter(res.data));
  };

  return (
    <div className="name">
        <h1>By Ariel F.G.</h1>
      <input className="BoxSearch"
        type="text" placeholder="Enter the id."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button onClick={searchType}><h2>Search</h2></button>
    
    </div>
  );
};

export default SearchBox;