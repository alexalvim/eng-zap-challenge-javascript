import React from 'react';
import Slider from 'react-slick';

import {
  CarouselContainer,
  ImageContainer
} from './styles'

export default ({ images, height, alt }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, i) => (
          <ImageContainer height={height}  key={i}>
            <img src={image} alt={alt}/>
          </ImageContainer>
        ))}
      </Slider>
    </CarouselContainer>
   );
}