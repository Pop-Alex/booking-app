import React, { Component } from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import Places from './pages/Places'
import SinglePlace from './pages/SinglePlace'
import Navbar from './comp/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home></Home>}/>
      <Route exact path='/places' element={<Places></Places>}/>
      <Route exact path='/places/:type' element={<SinglePlace></SinglePlace>}/>
      
    </Routes>
    
    </>
  );
}

export default App;
