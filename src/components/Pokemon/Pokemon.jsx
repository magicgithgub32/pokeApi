import React, { useState } from "react";
import "./Pokemon.css";
import PokemonCard from "../PokemonCard/PokemonCard";
import FirstImage from "../FirstImage/FirstImage";
import Buttons from "../Buttons/Buttons";
import SadPokemon from "../SadPokemon/SadPokemon";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState("start");
  const [searchInput, setSearchInput] = useState("");
  const [pokemonFound, setPokemonFound] = useState(false);
  const [pokemonValid, setPokemonValid] = useState(true);
  const [pokeId, setPokeId] = useState("");

  const getPokemon = async () => {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchInput}`
    );

    if (result.status === 200) {
      const res = await result.json();
      setPokemon(res);
      setPokemonValid(true);
      setPokeId(res.id);
    } else {
      setPokemonValid(false);
      setPokemon(null);
    }
  };

  const getPreviousPokemon = async () => {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeId - 1}`
    );
    if (result.status === 200) {
      const res = await result.json();
      setPokemon(res);
      setPokemonValid(true);
      setPokeId(res.id);
      setSearchInput("");
    } else {
      setPokemonValid(false);
      setPokemon(null);
    }
  };

  const getNextPokemon = async () => {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeId + 1}`
    );
    if (result.status === 200) {
      const res = await result.json();
      setPokemon(res);
      setPokemonValid(true);
      setPokeId(res.id);
      setSearchInput("");
    } else {
      setPokemonValid(false);
      setPokemon(null);
    }
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value.toLowerCase());
    setPokemonFound(true);
    event.preventDefault();
  };

  console.log("Pokemon", pokemon);
  console.log("SearchInput", searchInput);
  console.log("pokemonFound", pokemonFound);
  console.log("pokemonName", pokemon?.name);
  console.log("pokemonValid", pokemonValid);
  console.log("pokeId", pokeId);

  return (
    <>
      <div className="main">
        <Buttons
          searchInput={searchInput}
          handleInputChange={handleInputChange}
          getPokemon={getPokemon}
          getPreviousPokemon={getPreviousPokemon}
          getNextPokemon={getNextPokemon}
          pokeId={pokeId}
        />
        {pokemon === "start" ? <FirstImage /> : ""}
        {pokemon && pokemon?.sprites && pokemonFound && pokemon.name ? (
          <PokemonCard pokemon={pokemon} />
        ) : pokemon != "start" && !pokemonValid ? (
          <SadPokemon />
        ) : (
          pokemon != "start" && <SadPokemon />
        )}
      </div>
    </>
  );
};

export default Pokemon;
