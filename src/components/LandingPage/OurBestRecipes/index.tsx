import React from 'react';
import Recipe from './Recipes';
import { Container, Content, Heading, Cards } from './styles';

export function OurBestRecipes() {
  return (
    <Container>
      <Content>
        <Heading>
          <h3>Our Best Recipes</h3>
          <h5>
            Far far away, behind the word mountains, far from the countries
            <br />
            Vokalia and Consonantia, there live the blind texts.
          </h5>
        </Heading>

        <Cards>
          <Recipe
            imageUrl='/components/LandingPage/Recipes/comida_1.svg'
            link='#'
            title='Broccoli Salad with Bacon'
          />
          <Recipe
            imageUrl='/components/LandingPage/Recipes/comida_2.svg'
            link='#'
            title='Classic Beef Burgers'
          />
          <Recipe
            imageUrl='/components/LandingPage/Recipes/comida_3.svg'
            link='#'
            title='Classic Potato Salad'
          />
          <Recipe
            imageUrl='/components/LandingPage/Recipes/comida_4.svg'
            link='#'
            title='Cherry Cobbler on the Grill'
          />
        </Cards>
      </Content>
    </Container>
  );
}

export default OurBestRecipes;
