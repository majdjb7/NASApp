import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Favourites from './components/Favourites';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';
function App() {

  const saveToDB = () => {
    console.log("SAVE TO DB")
  }
  
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search saveToDB={saveToDB}/>} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
    </Router>
  );
}

export default App;
