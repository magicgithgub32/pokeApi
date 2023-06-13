import PokemonCard from "../PokemonCard/PokemonCard";
import "./Buttons.css";
import React from "react";

const Buttons = ({
  searchInput,
  handleInputChange,
  getPokemon,
  getPreviousPokemon,
  getNextPokemon,
  pokeId,
}) => {
  return (
    <div className="buttonsContainer">
      <div className="nameSearchButtonsContainer">
        <input
          className="searchInput"
          type="text"
          placeholder="Search your pokemon"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button type="submit" className="searchButton" onClick={getPokemon}>
          Search
        </button>
      </div>

      <div className="next_prev_buttons">
        {pokeId && pokeId > 1 && (
          <button
            type="submit"
            className="prevButton"
            onClick={getPreviousPokemon}
          >
            Prev
          </button>
        )}

        {pokeId && pokeId < 1010 && (
          <button type="submit" className="nextButton" onClick={getNextPokemon}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Buttons;
