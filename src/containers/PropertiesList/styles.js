import styled from 'styled-components';

import Colors from '../../colors';
import Spaces from '../../spaces';
import Typo from '../../typo';

export const ContentWrapper = styled.div`
  background-color: ${Colors.lightGray};
  min-height: 100%;
`;

export const Container = styled.div`
  height: 100%;
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

export const ButtonHolder = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const PropertiesCardsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  > li {
    margin-bottom: ${Spaces.double};
    width: 100%;

    &:nth-child(odd) {
      margin-right: ${Spaces.double};
    }
  }
  @media(min-width: ${Spaces.tabletBreakpoint}) {
    > li {
      width: calc(50% - ${Spaces.base});
    }
  }
`;

export const HorizontalList = styled.ul`
  > li {
    display: inline-block;
    margin-right: ${Spaces.double};
  }
`;

export const SimpleText = styled.span`
  color: ${Colors.darkerColor};
  display: inline-block;
  font-size: ${Typo.medium};
  margin-top: ${Spaces.base};
`;