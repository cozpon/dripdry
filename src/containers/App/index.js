import React, { Component } from 'react';

class App extends Component {
  render() {
    return(
      <div className="main">
          <div id="hours-text">
            Hours: 7am - 5pm
          </div>
          <br />
            <img id="main-logo" src="CafeDripDry.png"></img>
          <br />
          <div id="main-text">
          <a href="https://www.instagram.com/cafedripdry/" target="blank" >@CafeDripDry</a>
          </div>
      </div>
    );
  }
}

export default App;