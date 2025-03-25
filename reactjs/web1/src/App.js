import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router";
import About from './Pages/About';
import Contact from './Pages/Contact';
import { TeacherList } from './TeacherList';


function App() {
  return (
    <TeacherList/>

  );
}

export default App;
