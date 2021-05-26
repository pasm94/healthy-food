import React from 'react';

import { Container } from './styles';

export function Input({ ...rest }) {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
}

export default Input;
