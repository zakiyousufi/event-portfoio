import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import Home from './components/pages/home/Home';
import About from './components/pages/About';
import GetInvolved from './components/pages/GetInvolved';
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
              <Route path='/get-involved' element={<GetInvolved />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
