import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components'
import { FaBuilding } from "react-icons/fa";

import { PORTALS } from '../../variables';
import IconItem from '../../components/IconItem';
import { Label } from '../../components/IconItem/styles';

describe('Testing IconItem', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <IconItem
        label='foo'
        Icon={FaBuilding}
        activePortal={PORTALS.ZAP}/>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with correctly label', () => {
    const wrapper = mount(
      <IconItem
        label='foo'
        Icon={FaBuilding}
        activePortal={PORTALS.ZAP}/>
    );

    expect(wrapper.find(Label).text()).toEqual('foo');
  });
});
