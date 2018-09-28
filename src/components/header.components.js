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
        <nav className="header-effect">
          <NavLink to="/" >
            <span data-hover="Contact">Contact</span>
          </NavLink>
        </nav>
        </div>
      </div>
    );
  }

export default MainHeader;