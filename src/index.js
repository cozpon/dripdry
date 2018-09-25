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

import MainHeader from './components/header.components';



ReactDOM.render(
  <IntlProvider locale="en">
    <Router>
      <div id="source">
        <header id="global-nav-header">
        <MainHeader />
          <Link to="/">
            <div id="logo"></div>
          </Link>
        </header>
        <Route exact path="/" component={App} />
      </div>
    </Router>
  </IntlProvider>,
document.getElementById('root')
);
registerServiceWorker();
