import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Home from './components/Home';
import TopNav from './components/TopNav';
import FootNav from './components/FootNav';
import Map from './components/Map';
import riders from './components/RiderList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Picture from './components/Picture';
import Table from './components/Table';


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
          <Route path="/pictures" element={<Picture />} />
          <Route path="/map" element={<Map riders={riders} />} />
          <Route path="/riderList" element={<Table riders={riders} />} />

      </Routes>

      <footer>
        <FootNav />
      </footer>
    </div>
    </Router>

  );
}

export default App;
