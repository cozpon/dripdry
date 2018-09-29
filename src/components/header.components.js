import React from 'react';
import { NavLink } from 'react-router-dom';

const MainHeader = () => {
    return (
       <div className="header">
        <div className="nav-links">
          <nav className="header-effect">
            <NavLink to="/bar" >
              <span data-hover="Bar">Bar</span>
            </NavLink>
          </nav>
          <hr />
          <nav className="header-effect">
            <NavLink to="/" >
              <span data-hover="Home">Home</span>
            </NavLink>
          </nav>
          <nav className="header-effect">
            <NavLink to="/menu" >
              <span data-hover="Menu">Menu</span>
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
            <NavLink to="https://www.instagram.com/cafedripdry/">
              <span data-hover="@CafeDripDry">@CafeDripDry</span>
            </NavLink>
          </nav>
          </div>
        </div>
      </div>
    );
  }

export default MainHeader;