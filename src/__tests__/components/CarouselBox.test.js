import React from 'react';
import { shallow } from 'enzyme';

import { PORTALS } from '../../variables';
import CarouselBox from '../../components/CarouselBox';
import TextButton from '../../components/TextButton';

describe('Testing CarouselBox', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <CarouselBox
        images={['src']}
        title='foo'
        activePortal={PORTALS.ZAP}/>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should call onClick function when click in TextButton', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
      <CarouselBox
        images={['src']}
        title='foo'
        onClick={mockFunction}
        activePortal={PORTALS.ZAP}/>
    );

    wrapper.find(TextButton).simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });

  it('should show the passed children', () => {
    const wrapper = shallow(
      <CarouselBox
        images={['src']}
        title='foo'
        activePortal={PORTALS.ZAP}>
        <div id='test'></div>
      </CarouselBox>
    );

    expect(wrapper.find('#test')).toHaveLength(1);
  });
});