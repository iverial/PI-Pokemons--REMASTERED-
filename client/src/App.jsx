import "./App.css";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import LandingPage from "./components/LandingPage/LandingPage";

import { Routes, Route } from "react-router-dom";

const REACT_APP_URL_API_PI_POKEMONS = import.meta.env.VITE_REACT_APP_URL_API_PI_POKEMONS;
const REACT_APP_URL_API_PI_TYPES = import.meta.env.VITE_REACT_APP_URL_API_PI_TYPES


function App() {
  console.log(REACT_APP_URL_API_PI_POKEMONS, REACT_APP_URL_API_PI_TYPES )
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<LandingPage />} />
        <Route path="/pokemons" element={<Home />} />
        <Route exact path="/pokemons/:id" element={<Details />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />     
      </Routes>
    </div>
  );
}

export default App;
