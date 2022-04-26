import Navbar from './Component/Navbar'
import Movie from './Component/Movies'
import Banner from './Component/Banner';
import Favorites from './Component/Favorites';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';



function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path="/favourites" element={<Favorites/>} />
        <Route exact path="/movie" element={<Movie/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
