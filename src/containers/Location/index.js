import React, { Component } from 'react';
import MainHeader from '../../components/header.components';

class Location extends Component {
  render() {
    return(
      <div className="location">
      <header id="global-nav-header">
          <MainHeader />
      </header>
          <div id="location-text">
          <br />
          <br />
          <br />
          <h2>drive in ur car till u see it</h2>
          u rly can't miss it
          </div>
      </div>
    );
  }
}

export default Location;