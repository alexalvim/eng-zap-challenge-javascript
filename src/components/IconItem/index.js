import React from 'react';

import Colors from '../../colors';
import {
  ContentWrapper,
  Label,
  iconStyles
} from './styles';

export default ({ Icon, label, activePortal }) => (
  <ContentWrapper>
    <Icon
      size={18}
      color={Colors.portalMainColor[activePortal]}
      style={iconStyles} />
    <Label>{label}</Label>
  </ContentWrapper>
)