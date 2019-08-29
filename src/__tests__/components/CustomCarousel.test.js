import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components'

import CustomCarousel from '../../components/CustomCarousel';
import { ImageContainer } from '../../components/CustomCarousel/styles';

describe('Testing CustomCarousel', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <CustomCarousel
        images={['url']}
        alt='altImage'
        height={10}/>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should pass correct height to ImageContainer', () => {
    const wrapper = mount(
      <CustomCarousel
        images={['url']}
        alt='altImage'
        height={10}/>
    );

    expect(wrapper.find(ImageContainer).prop('height')).toEqual(10);
  });

  it('should use correct alt', () => {
    const wrapper = mount(
      <CustomCarousel
        images={['url']}
        alt='altImage'
        height={10}/>
    );

    expect(wrapper.find('img').prop('alt')).toEqual('altImage');
  });
});
