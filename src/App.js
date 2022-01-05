import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Favourites from './components/Favourites';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';
import axios from 'axios'
const API_KEY = "gNMncZvQy1d1KpqbW5LE2ndgC155lmhvWnwEGeaE"
function App() {
  const [astronomyObject, setAstronomyObject] = useState([])


  useEffect(async () =>{
    const response = await axios.get('http://localhost:3001/astronomy')
    setAstronomyObject(response.data)
  }, [])
  console.log(astronomyObject)
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home astronomyObject={astronomyObject}/>} />
          <Route path="/search" element={<Search />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
    </Router>
  );
}

export default App;
