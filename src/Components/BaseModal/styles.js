import styled from 'styled-components';

import Colors from '../../colors';
import Spaces from '../../spaces';

export const OverlayWrapper = styled.div`
  align-items: center;
  background-color: ${Colors.overlayColor}
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
`;

export const ModalContent = styled.div`
  background-color: ${Colors.lighterColor};
  border-radius: 5px;
  height: 100%;
  position: relative;
  width: 100%;

  @media(min-width: ${Spaces.tabletBreakpoint}) {
    height: auto;
    max-height: 600px;
    max-width: 500px;
  }
`;

export const CloseButton = styled.button`
  background-color: ${Colors.lighterColor};
  border: none;
  border-radius: 50%;
  box-shadow: 1px 3px 3px rgba(0,0,0,0.5);
  cursor: pointer;
  height: 30px;
  padding: ${Spaces.half};
  position: absolute;
  right: ${Spaces.base};
  top: ${Spaces.base};
  width: 30px;
  z-index: 1;
`;

export const closeButtonIconStyles = {
  color: Colors.darkerColor
}