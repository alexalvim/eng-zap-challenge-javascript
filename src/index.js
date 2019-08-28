import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './reset.css'
import PropertiesList from './containers/PropertiesList';
import { Store } from './store';

ReactDOM.render(
  <Provider store={Store}>
    <PropertiesList />
  </Provider>, document.getElementById('root'));
