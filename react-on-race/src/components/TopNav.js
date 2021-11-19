import './App.css';
import React from 'react';
import Home from './components/Home';
import TopNav from './components/TopNav';
import BotNav from './components/BotNav';
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
        <Route path="/location" exact component={ Location }/>
        <Route path="/pictures" exact component={ Picture }/>
        <Route path="/riders" exact component={ Rider }/>
        </Switch>
        <footer>
          <BotNav />
        </footer>
      </div>
    </Router>
  );
}

export default App;
