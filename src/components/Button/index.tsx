import React from 'react';

import { Container } from './styles';

export function Button({ ...rest }) {
  return (
    <Container>
      <button {...rest}></button>
    </Container>
  );
}

export default Button;
