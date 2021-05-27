import Button from '@/components/Button';
import Input from '@/components/Input';
import React from 'react';

import { Container, Content } from './styles';

export function JoinOurMembership() {
  return (
    <Container>
      <Content>
        <h1>Join our membership to get special offer</h1>
        <span id='search'>
          <Input placeholder='Enter your email address' />
          <Button type='button'>Join</Button>
        </span>
      </Content>
    </Container>
  );
}

export default JoinOurMembership;
