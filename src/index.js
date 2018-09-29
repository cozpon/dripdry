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
import Bar from './containers/Bar';
import Drinks from './containers/Drinks';

ReactDOM.render(
  <IntlProvider locale="en">
    <Router>
      <div id="source">
        <Route exact path="/" component={ App } />
        <Route path="/menu" component={ Menu } />
        <Route path="/location" component={ Location } />
        <Route path="/bar" component={ Bar } />
        <Route path="/drinks" component={ Drinks } />
      </div>
    </Router>
  </IntlProvider>,
document.getElementById('root')
);
registerServiceWorker();
