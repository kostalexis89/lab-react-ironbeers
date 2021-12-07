import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import  Header  from './components/Header';
import Beers from "./components/Beers"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
      </Routes>
    </div>
  );
}

export default App;