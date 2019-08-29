import React from 'react';
import { shallow } from 'enzyme';

import { PORTALS } from '../../variables';
import PropertyInfoList from '../../components/PropertyInfoList';
import IconItem from '../../components/IconItem';

const mockedProperty = {
  bedrooms: 1,
  bathrooms: 1,
  parkingSpaces: 2,
  usableAreas: 10,
  address: {
    neighborhood: 'Moema'
  }
};

describe('Testing PropertyInfoList', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <PropertyInfoList
        property={mockedProperty}
        activePortal={PORTALS.ZAP}/>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all properties', () => {
    const wrapper = shallow(
      <PropertyInfoList
        property={mockedProperty}
        activePortal={PORTALS.ZAP}/>
    );

    expect(wrapper.find(IconItem)).toHaveLength(5);
  });

  it('should render without neighborhood', () => {
    const wrapper = shallow(
      <PropertyInfoList
        property={{...mockedProperty, address: {}}}
        activePortal={PORTALS.ZAP}/>
    );

    expect(wrapper.find(IconItem)).toHaveLength(4);
  });

  it('should pass correct activePortal', () => {
    const wrapper = shallow(
      <PropertyInfoList
        property={{...mockedProperty, address: {}}}
        activePortal={PORTALS.ZAP}/>
    );

    expect(wrapper.find(IconItem).first().prop('activePortal')).toEqual(PORTALS.ZAP);
  });
});