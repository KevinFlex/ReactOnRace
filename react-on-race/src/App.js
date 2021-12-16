import logo from './logo.svg';
import './App.css';
import './App.css';
import React from 'react';
import Home from './components/Home';
import TopNav from './components/TopNav';
import FootNav from './components/FootNav';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Picture from './components/Picture';


function App() {
  return (
    <Router>      
      <div className="App">
      <header>
        <TopNav />
      </header>
      <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="/Picture" element={<Picture />} />
      </Routes>

      <footer>
        <FootNav />
      </footer>
    </div>
    </Router>

  );
}

export default App;
