import React from 'react';

import { ContentWrapper, Container, Logo } from './styles';

export default ({ activePortal }) => (
  <ContentWrapper activePortal={activePortal}>
    <Container>
      <Logo src={require(`../../imgs/${activePortal}-logo.png`)}/>
    </Container>
  </ContentWrapper>
)