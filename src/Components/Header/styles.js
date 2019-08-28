import styled from 'styled-components';

import Colors from '../../colors';
import Spaces from '../../spaces';

export const ContentWrapper = styled.div`
  background-color: ${Colors.lighterColor};
  color: ${Colors.lighterColor};
  padding: ${Spaces.double};
  width: 100%;

  ${({activePortal}) => activePortal && `border-bottom: solid 2px ${Colors.portalMainColor[activePortal]};`}
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${Spaces.containerMaxWidth};
  width: 100%;
`;

export const Logo = styled.img`
  height: 40px;
`;