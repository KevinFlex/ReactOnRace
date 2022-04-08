import React from 'react';
import { Link } from 'react-router-dom';


function FootNav() {
    return (
        <nav className="d-none d-sm-inline-block navbar navbar-dark bg-dark sticky-bottom px-5 m-auto container-fluid">
            <div className='d-flex container-fluid'>
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
                <img src='..\logo.png'></img>
            </div>
            <div className='d-flex justify-content-end text-light'>
                <i className='fa fa-cycle'>Copyright ReactRace2022©
                </i>
            </div>
        </nav>
    );
}

export default FootNav;