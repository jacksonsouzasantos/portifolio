import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Skills from './pages/Skills';



function App() {
  return (
    <>
      <Router>
        <Routes>
          
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          
        </Routes>
      </Router>
    </>
  )
}

export default App;

App.js

