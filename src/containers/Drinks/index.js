import React, { Component } from 'react';
import BarHeader from '../../components/barheader.components';

class Drinks extends Component {
  render() {
    return(
      <div className="drink">
        <BarHeader />
        <div id="drink-text">
          <h2> Drinks </h2>
            Lone Star - $4 <br />
            DripDry Lite - $5
          <h2> Spirits </h2>
            Rebecca Special - $5

        </div>
      </div>
    );
  }
}

export default Drinks;