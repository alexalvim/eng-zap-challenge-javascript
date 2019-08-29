import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components'

import { PORTALS } from '../../variables';
import Colors from '../../colors';
import TextButton from '../../components/TextButton';
import { Button } from '../../components/TextButton/styles';

describe('Testing TextButton', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <TextButton
        label='foo'
        activePortal={PORTALS.ZAP}/>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with portal color', () => {
    const wrapper = mount(
      <TextButton
        label='foo'
        activePortal={PORTALS.ZAP}/>
    );

    expect(wrapper.find(Button)).toHaveStyleRule('color', Colors.portalMainColor[PORTALS.ZAP])
  });

  it('should render correctly with wrapperStyles', () => {
    const wrapper = mount(
      <TextButton
        label='foo'
        wrapperStyles='background: red;'
        activePortal={PORTALS.ZAP}/>
    );

    expect(wrapper.find(Button)).toHaveStyleRule('background', 'red')
  });

  it('call expected function', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <TextButton
        label='foo'
        onClick={mockFunction}
        activePortal={PORTALS.ZAP}/>
    );

    wrapper.simulate('click');
    expect(mockFunction).toHaveBeenCalled();    
  })
});
