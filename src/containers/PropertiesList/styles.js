import styled from 'styled-components';

import Colors from '../../colors';
import Spaces from '../../spaces';
import Typo from '../../typo';

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${Spaces.containerMaxWidth};
  padding: ${Spaces.double};
  width: 100%;
`;

export const Title = styled.h2`
  color: ${Colors.darkerColor};
  font-size: ${Typo.large};
`;

export const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${Spaces.double};
`;

export const PropertiesCardsList = styled.ul`
  list-style: none;
`;