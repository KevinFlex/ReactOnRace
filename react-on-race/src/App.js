import logo from './logo.svg';
import React from 'react';
import Home from './components/Home';
import TopNav from './components/TopNav';
import FootNav from './components/FootNav';
import Map from './components/Map';
import riders from './components/RiderList';
import picture from './components/Picture'
// import formInputs from './components/formInput';
import '../src/assets/scss/style.scss';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import InfiniteScroll from './components/InfinteScroll'
import Table from './components/Table';
import Contest from './components/Contest';
import 'bootstrap/dist/js/bootstrap.bundle'



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
          <Route path="/pictures" element={<InfiniteScroll />} />
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
