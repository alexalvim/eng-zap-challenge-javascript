import styled from 'styled-components';

import Colors from '../../colors';
import Typo from '../../typo'
import Spaces from '../../spaces';

export const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const Label = styled.span`
  color: ${Colors.darkerColor};
  font-size: ${Typo.medium};
`;

export const iconStyles = {
  marginRight: Spaces.base,
}