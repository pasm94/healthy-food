import React, { useState } from 'react';
import Button from '../../Button';
import Input from '../../Input';
import { FaBars } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

import { Container, Content, Bars, NavMobile } from './styles';

export function HealthyFood() {
  const [isNavOpen, setIsNavOpen] = useState(false);

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

          <Bars onClick={() => setIsNavOpen(!isNavOpen)}>
            <span style={{ color: isNavOpen ? 'white' : 'black' }}>
              <FaBars />
            </span>
          </Bars>
        </span>

        <h1>Ready for Trying a new recipe?</h1>
        <span id='search'>
          <Input placeholder='Search healthy recipes' />
          <Button type='button'>
            <FiSearch />
          </Button>
        </span>
      </Content>
      {isNavOpen && (
        <NavMobile>
          <a href='#'>HEALTHY RECIPIES</a>

          <a href='#'>BLOG</a>

          <a href='#'>JOIN</a>

          <a id='register' href='register'>
            REGISTER
          </a>
        </NavMobile>
      )}
    </Container>
  );
}

export default HealthyFood;
