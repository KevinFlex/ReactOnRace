import logo from './logo.svg';
import React from 'react';
import Home from './components/Home';
import TopNav from './components/TopNav';
import FootNav from './components/FootNav';
import Map from './components/Map';
import riders from './components/RiderList';
// import formInputs from './components/formInput';
import '../src/assets/scss/style.scss';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Picture from './components/Picture';
import Table from './components/Table';
import Contest from './components/Contest';


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
          <Route path="/contestPage" element={<Contest />} />

      </Routes>

      <footer>
        <FootNav />
      </footer>
    </div>
    </Router>

  );
}

export default App;
