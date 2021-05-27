import React from 'react';
import { Container, Content } from './styles';

interface PostCardProps {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  authorName: string;
  authorImageUrl: string;
  authorImageAlt?: string;
}

export function PostCard({
  imageUrl,
  imageAlt = '',
  title,
  authorName,
  authorImageUrl,
  authorImageAlt = '',
}: PostCardProps) {
  return (
    <Container>
      <Content>
        <img src={imageUrl} alt={imageAlt} />

        <h1>{title}</h1>
        <span>
          <img src={authorImageUrl} alt={authorImageAlt} />
          <p>{authorName}</p>
        </span>
      </Content>
    </Container>
  );
}

export default PostCard;
