import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components'

import { PORTALS } from '../../variables';
import Colors from '../../colors';
import Header from '../../components/Header';
import { ContentWrapper, Logo } from '../../components/Header/styles';

describe('Testing Header', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Header
        activePortal={PORTALS.ZAP}/>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with portal color', () => {
    const wrapper = mount(
      <Header
        activePortal={PORTALS.ZAP}/>
    );

    expect(wrapper.find(ContentWrapper)).toHaveStyleRule('border-bottom', `solid 2px ${Colors.portalMainColor[PORTALS.ZAP]}`)
  });

  it('should render correctly with correct image', () => {
    const wrapper = mount(
      <Header
        activePortal={PORTALS.VIVA_REAL}/>
    );

    expect(wrapper.find(Logo).prop('src')).toEqual(require(`../../imgs/${PORTALS.VIVA_REAL}-logo.png`))
  });
});
