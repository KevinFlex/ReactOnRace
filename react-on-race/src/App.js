import logo from './logo.svg';
import './App.css';
import './App.css';
import React from 'react';
import Home from './components/Home';
import TopNav from './components/TopNav';
import FootNav from './components/FootNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <TopNav />
        </header>
        <Switch>
        <Route path="/" exact component={ Home }/>
        </Switch>
        <footer>
          <FootNav />
        </footer>
      </div>
    </Router>
  );
}

export default App;