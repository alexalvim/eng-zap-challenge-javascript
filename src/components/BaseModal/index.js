import React, { Fragment } from 'react';

import { FaTimes } from "react-icons/fa";
import {
  OverlayWrapper,
  ModalContent,
  CloseButton,
  closeButtonIconStyles
} from './styles';

export default ({ children, isOpen, closeModal }) => (
  isOpen ?
    <OverlayWrapper>
      <ModalContent>
        <CloseButton onClick={closeModal}>
          <FaTimes size={20} style={closeButtonIconStyles}/>
        </CloseButton>
        {children}
      </ModalContent>
    </OverlayWrapper>: <Fragment/>
)