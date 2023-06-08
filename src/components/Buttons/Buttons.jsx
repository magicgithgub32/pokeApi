import "./Buttons.css";
import React from "react";

const Buttons = ({ searchInput, handleInputChange, getPokemon }) => {
  return (
    <div className="buttonsContainer">
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
  );
};

export default Buttons;
