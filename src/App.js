import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Favourites from './components/Favourites';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';
import axios from 'axios'
function App() {
  let [savedData, setSavedData] = useState([])

  const saveToDB = (astronomyObject) => {
    console.log(astronomyObject)
    axios.post(`http://localhost:3001/astronomy`, { astronomyObject })
    
    let favouritesArray = [...savedData]
    favouritesArray.push(astronomyObject)
    setSavedData(favouritesArray)
  }
  
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search saveToDB={saveToDB}/>} />
          <Route path="/favourites" element={<Favourites savedData={savedData}/>} />
        </Routes>
    </Router>
  );
}

export default App;
