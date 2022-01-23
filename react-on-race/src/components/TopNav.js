import React from 'react';
import { Link } from 'react-router-dom';


function TopNav() {
  return (
    <nav>
      <h3>Title</h3>
      <ul className="nav-links">
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/pictures'>
          <li>Picture</li>
        </Link>
        <Link to='/map'>
          <li>Race map</li>
        </Link>
        <Link to='/riderList'>
          <li>Riders information</li>
        </Link>
      </ul>

    </nav>

  );
}

export default TopNav;
