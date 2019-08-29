import styled from 'styled-components';

import Spaces from '../../spaces';
import Typo from '../../typo';
import Colors from '../../colors';

export const TextWrapper = styled.div`
  padding: ${Spaces.double};
`;

export const Title = styled.h2`
  font-size: ${Typo.large};
  margin-bottom: ${Spaces.double};

  ${({activePortal}) => activePortal && `color: ${Colors.portalMainColor[activePortal]}`}
`;

export const Price = styled.span`
  color: ${Colors.darkerColor};
  display: block;
  font-size: ${Typo.medium};
  margin-top: ${Spaces.base};
`;

export const PriceContainer = styled.div`
  border-bottom: solid 1px ${Colors.mediumGray};
  margin-bottom: ${Spaces.double};
  padding: 0 0 ${Spaces.double}
`;