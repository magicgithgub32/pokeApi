import React, { useState } from "react";
import "./Pokemon.css";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  const [pokemonName, setPokemonName] = useState("pikachu");
  const [searchInput, setSearchInput] = useState("");

  const getPokemon = async () => {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const res = await result.json();
    setPokemon(res);
    setSearchInput(""); // Clear the input field value
  };

  console.log(pokemonName);

  return (
    <>
      <div className="main">
        <div className="buttonsContainer">
          <input
            className="searchInput"
            type="text"
            placeholder="Search your pokemon"
            value={searchInput} // Bind the input value to the searchInput state
            onChange={(ev) => setSearchInput(ev.target.value)} // Update the searchInput state on input change
          />
          <button type="submit" className="searchButton" onClick={getPokemon}>
            Search
          </button>
        </div>
        {pokemon && (
          <div className="pokemonWrapper" key={pokemon.name}>
            <img
              className="pokemonImage"
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
            <p>{pokemon.name.toUpperCase()}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Pokemon;
