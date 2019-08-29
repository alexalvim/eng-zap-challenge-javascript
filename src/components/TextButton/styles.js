import styled from 'styled-components';

import Colors from '../../colors';
import Typo from '../../typo';

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${Typo.medium}
  font-weight: 500;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }

  ${({activePortal}) => activePortal && `color: ${Colors.portalMainColor[activePortal]};`}
  ${({styles}) => styles}
`;