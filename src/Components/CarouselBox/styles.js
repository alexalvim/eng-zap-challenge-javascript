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
  height: 100%;
  overflow: hidden;
`;

export const CarouselWrapper = styled.div`
  width: 100%;
`;

export const TextHolder = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${Spaces.double};
`;

export const titleWrapperStyles = `
  font-size: ${Typo.large};
  margin-bottom: ${Spaces.base};
`;