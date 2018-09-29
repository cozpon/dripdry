import React, { Component } from 'react';
import MainHeader from '../../components/header.components';

class App extends Component {
  render() {
    return(
      <div className="main">
      <header id="global-nav-header">
          <MainHeader />
      </header>
          <br />
            <img id="main-logo" src="https://i.imgur.com/qDDPIwh.png"></img>
          <br />
          <div id="hours-text">
            Hours: 7am - 5pm<br />
            Monday thru Sunday
          </div>
      </div>
    );
  }
}

export default App;