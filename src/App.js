import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getPropertiesRequest
} from './actions/properties';

export class App extends React.Component {
  render() {
    const { properties } = this.props;
    console.log('>>>>>>>>>', properties); 
    return (
      <div>
        App
      </div>
    );
  }
}

const mapStateToProps = store => ({
  properties: store.propertiesState,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPropertiesRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
