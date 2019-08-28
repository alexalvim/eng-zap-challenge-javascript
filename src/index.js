import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './reset.css'
import PropertiesList from './containers/PropertiesList';
import { Store } from './store';

ReactDOM.render(
  <Provider store={Store}>
    <PropertiesList />
  </Provider>, document.getElementById('root'));
