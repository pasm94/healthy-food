import Button from '@/components/Button';
import React from 'react';
import { Container } from './styles';

interface RecipeProps {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  link: string;
}

export function Recipe({ imageUrl, imageAlt = '', link, title }: RecipeProps) {
  return (
    <Container>
      <img src={imageUrl} alt={imageAlt} />
      <span>
        <h4>{title}</h4>
        <Button>
          <a href={link}>See Recipe</a>
        </Button>
      </span>
    </Container>
  );
}

export default Recipe;
