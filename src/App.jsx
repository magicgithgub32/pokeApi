import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Pokemon from "./components/Pokemon/Pokemon";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Pokemon />
      <Footer />
    </div>
  );
};

export default App;
