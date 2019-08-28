import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../Components/Header';
import {
  getPropertiesRequest
} from '../../actions/properties';

export class PropertiesList extends React.Component {
  componentDidMount() {
    const { properties, getPropertiesRequest } = this.props;
    if (properties.activeProperties.length === 0) {
      getPropertiesRequest();
    }
  }

  render() {
    const { properties } = this.props;
    console.log(properties)
    return (
      <div>
        <Header
          activePortal={properties.activePortal}/>
        {properties.activeProperties.map((property) => 
          <div key={property.id}>Imóvel</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  properties: store.propertiesState,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPropertiesRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesList);
