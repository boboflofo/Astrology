import { useState } from 'react';
import '../App.css'
import '../Game.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Game from './Game';
import Education from './Education';
import FindSign from './FindSign';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id="content">
     
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/education" element={<Education />} />
          <Route path="/FindSign" element={<FindSign />} />
        </Routes>
     
      </Router>
      <Footer/>
    </div>
);
}

export default App
