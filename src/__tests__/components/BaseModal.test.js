import React, { Fragment } from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components'

import BaseModal from '../../components/BaseModal';
import { OverlayWrapper, CloseButton } from '../../components/BaseModal/styles';

describe('Testing BaseModal', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <BaseModal
        isOpen={true}/>
    );

    expect(wrapper.find(OverlayWrapper)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not return OverlayWrapper when isOpen is false', () => {
    const wrapper = mount(
      <BaseModal
        isOpen={false}/>
    );

    expect(wrapper.find(OverlayWrapper)).toHaveLength(0);
  });

  it('should call closeModal function when click is CloseButton', () => {
    const mockFunction = jest.fn();
    const wrapper = mount(
      <BaseModal
        closeModal={mockFunction}
        isOpen={true}/>
    );

    wrapper.find(CloseButton).simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });
});
