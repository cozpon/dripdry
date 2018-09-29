import React, { Component } from 'react';
import MainHeader from '../../components/header.components';

class Menu extends Component {
  render() {
    return(
      <div className="menu">
        <MainHeader />
        <div id="menu-text">
          <h2> Drinks </h2>
            Drip Coffee - $4 <br />
            Tea - $4
          <h2> Food </h2>
            Fresh baked bread - $20 <br />
            Tomato sandwich - $12
        </div>
      </div>
    );
  }
}

export default Menu;