import React from 'react';
import { NavLink } from 'react-router-dom';

const BarHeader = () => {
    return (
       <div className="barheader">
        <div className="nav-links">
          <nav className="header-effect">
            <NavLink to="/" >
              <span data-hover="Cafe">Cafe</span>
            </NavLink>
          </nav>
          <hr />
          <nav className="header-effect">
            <NavLink to="/bar" >
              <span data-hover="Home">Home</span>
            </NavLink>
          </nav>
          <nav className="header-effect">
            <NavLink to="/drinks" >
              <span data-hover="Drinks">Drinks</span>
            </NavLink>
          </nav>
          <nav className="header-effect">
            <NavLink to="/location" >
              <span data-hover="Location">Location</span>
            </NavLink>
          </nav>
          <hr />
          <div id="main-text">
          <nav className="header-effect">
            <NavLink to="https://www.instagram.com/Bardripdry/">
              <span data-hover="@BarDripDry">@BarDripDry</span>
            </NavLink>
          </nav>
          </div>
        </div>
      </div>
    );
  }

export default BarHeader;