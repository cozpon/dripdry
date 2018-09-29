import React, { Component } from 'react';
import BarHeader from '../../components/barheader.components';
class Bar extends Component {
  render() {
    return(
      <div className="bar">
        <BarHeader />
        <div id="bar-text">
          <h2> comin soon </h2>
        </div>
      </div>
    );
  }
}

export default Bar;