import styled from 'styled-components';

import Spaces from '../../spaces';
import Typo from '../../typo';

export const ContentWrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0px 3px 5px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  margin: ${Spaces.double} 0;
  overflow: hidden;

  @media(min-width: ${Spaces.tabletBreakpoint}){
    flex-direction: row;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;

  .slick-arrow:before {
    opacity: 1;
    text-shadow: 1px 3px 3px rgba(0,0,0,0.5);
  }

  .slick-arrow.slick-disabled:before {
    opacity: .5;
  }

  .slick-next {
    right: 5px;
    z-index: 1;
  }

  .slick-prev {
    left: 5px;
    z-index: 1;
  }

  @media(min-width: ${Spaces.tabletBreakpoint}){
    width: 350px;
  }
`;

export const ImageContainer = styled.div`
  align-items: center;
  display: flex !important;
  height: 300px;
  justify-content: center;
  overflow: hidden;
  position: relative;

  > img {
    width: auto;
    height: 300px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  @media(min-width: ${Spaces.tabletBreakpoint}){
    max-width: 350px;
  }
`;

export const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${Spaces.base};
`;

export const titleWrapperStyles = `
  font-size: ${Typo.large};
  margin-bottom: ${Spaces.base};
`;