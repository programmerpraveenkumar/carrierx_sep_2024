import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router";
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
  </BrowserRouter>

  );
}

export default App;
