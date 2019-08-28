import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../components/Header';
import TextButton from '../../components/TextButton';
import CarouselBox from '../../components/CarouselBox';
import PropertyInfoList from '../../components/PropertyInfoList'
import { PORTALS } from '../../variables';
import { formatCurrency } from '../../helpers';
import {
  getPropertiesRequest,
  changeActivePortal,
  seeMoreProperties
} from '../../actions/properties';
import {
  ContentWrapper,
  Container,
  Title,
  TitleWrapper,
  PropertiesCardsList,
  ButtonHolder,
  SimpleText
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

  handleClickSeeMore = () => {
    const { seeMoreProperties } = this.props;
    seeMoreProperties();
  }

  render() {
    const { properties } = this.props;
    const { handleClickChangePortal, handleClickSeeMore } = this;
    console.log(properties)
    return (
      <ContentWrapper>
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
                  <PropertyInfoList
                    property={property}
                    activePortal={properties.activePortal}/>
                  <SimpleText>
                    {formatCurrency(property.pricingInfos.price)}
                  </SimpleText>
                </CarouselBox>
              </li>
            )}
          </PropertiesCardsList>
          <ButtonHolder>
            <TextButton
              onClick={handleClickSeeMore}
              activePortal={properties.activePortal}
              label={'Ver Mais'}/>
          </ButtonHolder>
        </Container>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = store => ({
  properties: store.propertiesState,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getPropertiesRequest,
    changeActivePortal,
    seeMoreProperties
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesList);
