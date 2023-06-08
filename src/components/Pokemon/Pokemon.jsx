import React, { useState } from "react";
import "./Pokemon.css";
import PokemonCard from "../PokemonCard/PokemonCard";
import FirstImage from "../FirstImage/FirstImage";
import Buttons from "../Buttons/Buttons";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const [searchInput, setSearchInput] = useState("");

  const getPokemon = async () => {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchInput}`
    );
    const res = await result.json();
    setPokemon(res);
    setSearchInput("");
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value.toLowerCase());
  };

  return (
    <>
      <div className="main">
        <Buttons
          searchInput={searchInput}
          handleInputChange={handleInputChange}
          getPokemon={getPokemon}
        />
        {pokemon ? <PokemonCard pokemon={pokemon} /> : <FirstImage />}
      </div>
    </>
  );
};

export default Pokemon;
