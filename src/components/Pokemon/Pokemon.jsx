import React, { useState } from "react";
import "./Pokemon.css";

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

  return (
    <>
      <div className="main">
        <div className="buttonsContainer">
          <input
            className="searchInput"
            type="text"
            placeholder="Search your pokemon"
            value={searchInput}
            onChange={(ev) => setSearchInput(ev.target.value)}
          />
          <button type="submit" className="searchButton" onClick={getPokemon}>
            Search
          </button>
        </div>
        {pokemon ? (
          <div className="pokemonWrapper" key={pokemon.name}>
            <img
              className="pokemonImage"
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
            <p className="pokeName">{pokemon.name.toUpperCase()}</p>
          </div>
        ) : (
          <img
            className="pokemonImage"
            src="https://res.cloudinary.com/dxxkog06n/image/upload/v1686060119/main_Img_mfaorj.jpg"
            alt="Pokemon"
          />
        )}
      </div>
    </>
  );
};

export default Pokemon;
