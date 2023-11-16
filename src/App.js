import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App d-flex p-5">
      <Sidebar />
      <div className='pages'>
        <Home />
      </div>
    </div>
  );
}

export default App;
