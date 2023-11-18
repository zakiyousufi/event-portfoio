import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import Home from './components/pages/home/Home';
import About from './components/pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App d-flex">
      <Router>
        <Sidebar />
        <div className='pages'>
          <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
