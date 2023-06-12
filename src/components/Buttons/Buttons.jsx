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

      {pokeId && (
        <div className="next_prev_buttons">
          <button
            type="submit"
            className="prevButton"
            onClick={getPreviousPokemon}
          >
            Prev
          </button>
          <button type="submit" className="nextButton" onClick={getNextPokemon}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Buttons;
