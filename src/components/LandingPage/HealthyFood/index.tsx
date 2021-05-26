import React from 'react';
import Button from '../../Button';
import Input from '../../Input';
import { FiSearch } from 'react-icons/fi';

import { Container, Content } from './styles';

export function HealthyFood() {
  return (
    <Container>
      <Content>
        <span id='menu'>
          <h2>Healthy Food</h2>
          <nav>
            <a href='#'>HEALTHY RECIPIES</a>

            <a href='#'>BLOG</a>

            <a href='#'>JOIN</a>

            <a href='register'>REGISTER</a>
          </nav>
        </span>
        <h1>Ready for Trying a new recipe?</h1>
        <span id='search'>
          <Input placeholder='Search healthy recipes' />
          <Button type='button'>
            <FiSearch />
          </Button>
        </span>
      </Content>
    </Container>
  );
}

export default HealthyFood;
