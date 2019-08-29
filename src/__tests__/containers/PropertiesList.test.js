import React from 'react';
import { shallow } from 'enzyme';

import { PropertiesList } from '../../containers/PropertiesList';
import { SimpleText, ButtonHolder } from '../../containers/PropertiesList/styles';
import { PORTALS } from '../../variables';

const mockedProperties = {
  errorMessage: '',
  isLoading: false,
  [PORTALS.ZAP]: [{
    id: 1,
    pricingInfos: {
      businessType: 'SALE'
    }
  },{
    id: 2,
    pricingInfos: {
      businessType: 'SALE'
    }
  }],
  activePortal: PORTALS.ZAP,
  activeProperties: [{
    id: 1,
    pricingInfos: {
      businessType: 'SALE'
    }
  }]
}

describe('Testing PropertiesList', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <PropertiesList
        properties={mockedProperties}/>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should show error message when errorMessage exists', () => {
    const wrapper = shallow(
      <PropertiesList
        properties={{...mockedProperties, errorMessage: 'error'}}/>
    );

    expect(wrapper.find(SimpleText).text()).toEqual('Erro: error');
  });

  it('should show loadingMessage when isLoading is true', () => {
    const wrapper = shallow(
      <PropertiesList
        properties={{...mockedProperties, isLoading: true}}/>
    );

    expect(wrapper.find(SimpleText).text()).toEqual('Carregando ...');
  });

  it('should show see more button when portal properties is bigger than active properties', () => {
    const wrapper = shallow(
      <PropertiesList
        properties={mockedProperties}/>
    );

    expect(wrapper.find(ButtonHolder)).toHaveLength(1);
  });

  it('should show see more button when portal properties is equal than active properties', () => {
    const wrapper = shallow(
      <PropertiesList
        properties={{
          ...mockedProperties,
          activeProperties: [{
            id: 1,
            pricingInfos: {
              businessType: 'SALE'
            }
          },{
            id: 2,
            pricingInfos: {
              businessType: 'SALE'
            }
          }]}}/>
    );

    expect(wrapper.find(ButtonHolder)).toHaveLength(0);
  });

  it('should call getPropertiesRequest when call componentDidMount', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(
      <PropertiesList
        getPropertiesRequest={mockFunction}
        properties={{...mockedProperties, activeProperties: [] }}/>
    );

    wrapper.instance().componentDidMount();
    expect(mockFunction).toHaveBeenCalled();
  });
});

describe('Testing PropertiesList handleFunctions', () => {
  it('should call changeActivePortal when call handleClickChangePortal', () => {
    const mockFunction = jest.fn()
    const mockedArgument = 'foo';
    const wrapper = shallow(
      <PropertiesList
        changeActivePortal={mockFunction}
        properties={mockedProperties}/>
    );

    wrapper.instance().handleClickChangePortal(mockedArgument);
    expect(mockFunction).toHaveBeenCalledWith(mockedArgument);
  });

  it('should call changeActivePortal when call handleClickSeeMore', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(
      <PropertiesList
        seeMoreProperties={mockFunction}
        properties={mockedProperties}/>
    );

    wrapper.instance().handleClickSeeMore();
    expect(mockFunction).toHaveBeenCalled();
  });

  it('should change state value and call selectActiveProperty when call handleClickProperty', () => {
    const mockFunction = jest.fn()
    const mockedProperty ='property';
    const wrapper = shallow(
      <PropertiesList
        selectActiveProperty={mockFunction}
        properties={mockedProperties}/>
    );
    wrapper.instance().state.openPropertyModal = false;
    wrapper.instance().handleClickProperty(mockedProperty);

    expect(wrapper.instance().state.openPropertyModal).toEqual(true);
    expect(mockFunction).toHaveBeenCalledWith(mockedProperty);
  });

  it('should change state value and call selectActiveProperty when call handleClosePropertyModal', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(
      <PropertiesList
        selectActiveProperty={mockFunction}
        properties={mockedProperties}/>
    );
    wrapper.instance().state.openPropertyModal = true;
    wrapper.instance().handleClosePropertyModal();

    expect(wrapper.instance().state.openPropertyModal).toEqual(false);
    expect(mockFunction).toHaveBeenCalled();
  });
});