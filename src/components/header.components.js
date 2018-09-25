import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
       <div>
        <div className="nav-links">
          <Link to="/">Home </Link>
          <Link to="/logout">Logout</Link>
          <Link to="/termsofservice">Terms of Service</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    );
  }

export default MainHeader;