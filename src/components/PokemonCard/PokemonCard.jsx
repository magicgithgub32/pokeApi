import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemonWrapper" key={pokemon.name}>
      <img
        className="pokemonImage"
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <p className="pokeName">{pokemon.name.toUpperCase()}</p>
    </div>
  );
};

export default PokemonCard;
