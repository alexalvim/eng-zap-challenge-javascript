import React from 'react';
import Slider from 'react-slick';

import TextButton from '../TextButton';
import CustomCarousel from '../CustomCarousel'
import {
  ContentWrapper,
  CarouselWrapper,
  TextHolder,
  titleWrapperStyles
} from './styles'

export default ({ images, activePortal, title, onClick, children }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
  <ContentWrapper>
    <CarouselWrapper>
      <CustomCarousel
        alt='Imagem do Imóvel'
        images={images}
        height={300}/>
    </CarouselWrapper>
    <TextHolder>
      <TextButton
        onClick={onClick}
        wrapperStyles={titleWrapperStyles}
        activePortal={activePortal}
        label={title}/>
      {children}
    </TextHolder>
  </ContentWrapper>);
}