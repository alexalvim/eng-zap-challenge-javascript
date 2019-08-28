import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getPropertiesRequest
} from './actions/properties';

export class App extends React.Component {
  componentDidMount() {
    const { properties, getPropertiesRequest } = this.props;
    if (properties.activeProperties.length === 0) {
      getPropertiesRequest();
    }
  }

  render() {
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
