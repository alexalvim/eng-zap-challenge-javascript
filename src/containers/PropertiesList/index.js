import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  FaBed,
  FaShower,
  FaCar,
} from "react-icons/fa";

import Header from '../../components/Header';
import TextButton from '../../components/TextButton';
import CarouselBox from '../../components/CarouselBox';
import IconItem from '../../components/IconItem';
import PropertyModal from '../../components/PropertyModal';
import { PORTALS } from '../../variables';
import { formatCurrency } from '../../helpers';
import {
  getPropertiesRequest,
  changeActivePortal,
  seeMoreProperties,
  selectActiveProperty
} from '../../actions/properties';
import {
  ContentWrapper,
  Container,
  Title,
  TitleWrapper,
  PropertiesCardsList,
  ButtonHolder,
  SimpleText,
  HorizontalList
} from './styles';

export class PropertiesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openPropertyModal: false,
    }
  }

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

  handleClickProperty = (property) => {
    const { selectActiveProperty } = this.props
    selectActiveProperty(property)
    this.setState({
      openPropertyModal: true,
    });
  }

  handleClosePropertyModal = () => {
    const { selectActiveProperty } = this.props
    selectActiveProperty({})
    this.setState({
      openPropertyModal: false,
    });
  }

  render() {
    const { properties } = this.props;
    const { openPropertyModal } = this.state;
    const {
      handleClickChangePortal,
      handleClickSeeMore,
      handleClickProperty,
      handleClosePropertyModal
    } = this;
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
                  onClick={() => handleClickProperty(property)}
                  title={`Imóvel para ${property.pricingInfos.businessType === 'RENTAL' ? 'Aluguel' : 'Venda'}`}
                  activePortal={properties.activePortal}
                  images={property.images}>
                  <HorizontalList>
                    <li>
                      <IconItem
                        activePortal={properties.activePortal}
                        Icon={FaBed}
                        label={`Quartos: ${property.bedrooms}`}/>
                    </li>
                    <li>
                      <IconItem
                        activePortal={properties.activePortal}
                        Icon={FaShower}
                        label={`Banheiros: ${property.bathrooms}`}/>
                    </li>
                    <li>
                      <IconItem
                        activePortal={properties.activePortal}
                        Icon={FaCar}
                        label={`Vagas: ${property.parkingSpaces}`}/>
                    </li>
                  </HorizontalList>
                  <SimpleText>
                    Valor: {formatCurrency(property.pricingInfos.price)}
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
        <PropertyModal
          activePortal={properties.activePortal}
          closeModal={handleClosePropertyModal}
          property={properties.activeProperty}
          isOpen={openPropertyModal}/>
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
    seeMoreProperties,
    selectActiveProperty
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesList);
