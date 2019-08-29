import styled from 'styled-components';

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
`;

export const ImageContainer = styled.div`
  align-items: center;
  display: flex !important;
  justify-content: center;
  overflow: hidden;
  position: relative;

  > img {
    width: auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  ${({height}) => height &&
  `
    height: ${height}px;

    > img {
      height: ${height}px;
    }
  `}
`;