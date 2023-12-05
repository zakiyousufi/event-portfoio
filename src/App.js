import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import GetInvolved from './components/pages/about/GetInvolved';
import Partners from './components/pages/Partners';
import Event from './components/pages/Event';
import Contact from './components/pages/Contact';
import Speakers from './components/pages/Speakers';
import Team from './components/pages/about/Team';
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
              <Route path='/partners' element={<Partners />} />
              <Route path='/events' element={<Event />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/speakers' element={<Speakers />} />
              <Route path='/about/team' element={<Team />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
