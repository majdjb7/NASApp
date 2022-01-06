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

  useEffect( async () => {
    let result = await axios.get(`http://localhost:3001/astronomy`)
    let favouritesArray = result.data
    setSavedData(favouritesArray)
  }, []);

  const saveToDB = (astronomyObject) => {
    axios.post(`http://localhost:3001/astronomy`, { astronomyObject })
    
    let favouritesArray = [...savedData]
    favouritesArray.push(astronomyObject)
    setSavedData(favouritesArray)
  }

  const deleteFromDB = (astronomyObject) => {
    let favouritesArray = [...savedData]
    let indexOfObject = savedData.findIndex(s => s.title==astronomyObject.title)
    axios.delete(`http://localhost:3001/astronomy/${astronomyObject.title}`)
    favouritesArray.splice(indexOfObject, 1)
    setSavedData(favouritesArray)
  }
  
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search saveToDB={saveToDB}/>} />
          <Route path="/favourites" element={<Favourites savedData={savedData} deleteFromDB={deleteFromDB}/>} />
        </Routes>
    </Router>
  );
}

export default App;
