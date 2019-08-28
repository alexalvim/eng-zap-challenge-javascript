import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../Components/Header';
import TextButton from '../../Components/TextButton';
import { PORTALS } from '../../variables';
import {
  getPropertiesRequest,
  changeActivePortal
} from '../../actions/properties';
import {
  Container,
  Title,
  TitleWrapper
} from './styles';

export class PropertiesList extends React.Component {
  componentDidMount() {
    const { properties, getPropertiesRequest } = this.props;
    if (properties.activeProperties.length === 0) {
      getPropertiesRequest();
    }
  }

  handleClickChangePortal = (portal) => {
    const { changeActivePortal } = this.props;
    changeActivePortal(portal);
  }

  render() {
    const { properties } = this.props;
    const { handleClickChangePortal } = this;
    return (
      <Fragment>
        <Header
          activePortal={properties.activePortal}/>
        <Container>
          <TitleWrapper>
            <Title>Lista de imóveis</Title>
            {properties.activePortal !== PORTALS.ZAP &&
              <TextButton
                onClick={() => handleClickChangePortal(PORTALS.ZAP)}
                activePortal={properties.activePortal}
                label={'Ir para o Zap'}/>}
            {properties.activePortal !== PORTALS.VIVA_REAL &&
              <TextButton
                onClick={() => handleClickChangePortal(PORTALS.VIVA_REAL)}
                activePortal={properties.activePortal}
                label={'Ir para o Viva Real'}/>}
          </TitleWrapper>
          {properties.activeProperties.map((property) => 
            <div key={property.id}>Imóvel {property.id}</div>
          )}
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = store => ({
  properties: store.propertiesState,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getPropertiesRequest,
    changeActivePortal
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesList);
