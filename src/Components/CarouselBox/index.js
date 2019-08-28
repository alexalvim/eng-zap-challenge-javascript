import React from 'react';
import Slider from 'react-slick';

import TextButton from '../TextButton';
import {
  ContentWrapper,
  CarouselContainer,
  ImageContainer,
  TextHolder,
  titleWrapperStyles
} from './styles'

export default ({ images, activePortal, title, children }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
  <ContentWrapper>
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, i) => (
          <ImageContainer key={i}>
            <img src={image} alt='Imagem do Imóvel'/>
          </ImageContainer>
        ))}
      </Slider>
    </CarouselContainer>
    <TextHolder>
      <TextButton
        wrapperStyles={titleWrapperStyles}
        activePortal={activePortal}
        label={title}/>
      {children}
    </TextHolder>
  </ContentWrapper>);
}