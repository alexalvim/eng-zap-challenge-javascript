import React from 'react';

import { Button } from './styles'

export default ({ label, onClick, activePortal, wrapperStyles }) => (
  <Button
    styles={wrapperStyles}
    activePortal={activePortal}
    onClick={onClick}>
    {label}
  </Button>
)