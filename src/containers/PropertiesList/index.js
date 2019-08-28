import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../Components/Header';
import TextButton from '../../Components/TextButton';
import CarouselBox from '../../Components/CarouselBox';
import { PORTALS } from '../../variables';
import {
  getPropertiesRequest,
  changeActivePortal
} from '../../actions/properties';
import {
  Container,
  Title,
  TitleWrapper,
  PropertiesCardsList
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
    console.log(properties)
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
          <PropertiesCardsList>
            {properties.activeProperties.map((property) => 
              <li key={property.id}>
                <CarouselBox
                  title={`Imóvel para ${property.pricingInfos.businessType === 'RENTAL' ? 'Aluguel' : 'Venda'}`}
                  activePortal={properties.activePortal}
                  images={property.images}>
                  {property.id}
                </CarouselBox>
              </li>
            )}
          </PropertiesCardsList>
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
