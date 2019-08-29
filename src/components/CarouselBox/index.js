import React from 'react';

import TextButton from '../TextButton';
import CustomCarousel from '../CustomCarousel'
import {
  ContentWrapper,
  CarouselWrapper,
  TextHolder,
  titleWrapperStyles
} from './styles'

export default ({ images, activePortal, title, onClick, children }) => (
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
