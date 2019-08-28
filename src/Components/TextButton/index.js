import React from 'react';

import { Button } from './styles'

export default ({ label, onClick, activePortal }) => (
  <Button
    activePortal={activePortal}
    onClick={onClick}>
    {label}
  </Button>
)