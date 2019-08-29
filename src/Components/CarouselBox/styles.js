import styled from 'styled-components';

import Spaces from '../../spaces';
import Typo from '../../typo';
import Colors from '../../colors';

export const ContentWrapper = styled.div`
  background-color: ${Colors.lighterColor};
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

export const CarouselWrapper = styled.div`
  width: 100%;

  @media(min-width: ${Spaces.tabletBreakpoint}){
    max-width: 350px;
  }
`;

export const TextHolder = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: ${Spaces.double};
`;

export const titleWrapperStyles = `
  font-size: ${Typo.large};
  margin-bottom: ${Spaces.base};
`;