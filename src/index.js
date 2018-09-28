import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { IntlProvider } from 'react-intl';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

/* Styles */
import './index.css';

import App from './containers/App';
import Menu from './containers/Menu';
import Location from './containers/Location';

import MainHeader from './components/header.components';



ReactDOM.render(
  <IntlProvider locale="en">
    <Router>
      <div id="source">
        <header id="global-nav-header">
        <MainHeader />
        </header>
        <Route exact path="/" component={ App } />
        <Route path="/menu" component={ Menu } />
        <Route path="/location" component={ Location } />
      </div>
    </Router>
  </IntlProvider>,
document.getElementById('root')
);
registerServiceWorker();
