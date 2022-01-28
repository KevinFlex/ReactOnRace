import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/Images/logo.png';


function TopNav() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <a className="navbar-brand" href="/"><img src="../../src/assets/Images/logo.png" width="80" height="30" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

            <li className="nav-item">
            <Link to='/pictures' className="nav-link">Picture          
            </Link>
            </li>
            <li className="nav-item">
            <Link to='/map' className="nav-link">Race map
            </Link>
            </li>
            <li className="nav-item">
            <Link to='/riderList' className="nav-link">Riders information
            </Link>
            </li>
            <li className="nav-item">
            <Link to='/contestPage' className="nav-link">Sponsor contest
            </Link>
            </li>

        </ul>
      </div>
    </nav>

  );
}

export default TopNav;
