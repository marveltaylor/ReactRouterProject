import { Routes, Route, Link } from 'react-router-dom';
import Home from './components';
import Blue from './components';
import Red from './components';
import { useState } from 'react';
import './App.css';

function App() {

  return (
    <>
      <div id="container">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/home">Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />}/>
          <Route path="/red" element={<Red />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
