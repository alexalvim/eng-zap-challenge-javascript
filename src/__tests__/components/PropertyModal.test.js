import React from 'react';
import { shallow } from 'enzyme';

import { PORTALS } from '../../variables';
import BaseModal from '../../components/BaseModal';
import PropertyModal from '../../components/PropertyModal';

const mockedProperty = {
  id: 1,
  images: ['src'],
  pricingInfos: {
    businessType: 'SALE'
  }
};

describe('Testing PropertyModal', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <PropertyModal
        property={mockedProperty}
        isOpen={true}
        activePortal={PORTALS.ZAP}/>
    );

    expect(wrapper.find(BaseModal)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not show Base modal when property id doesnt exist', () => {
    const wrapper = shallow(
      <PropertyModal
        property={{}}
        isOpen={true}
        activePortal={PORTALS.ZAP}/>
    );

    expect(wrapper.find(BaseModal)).toHaveLength(0);
  });
});
