// import { SwiperCarousel } from '@/components/SwiperCarousel';
import React from 'react';
import PostCard from './PostCard';
import { Container, Content, Posts } from './styles';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowRight } from 'react-icons/bs';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function ReadOurBlog() {
  return (
    <Container>
      <Content>
        <span>
          <h1>Read Our Blog</h1>
          <p>Far far away, behind the word mountains, far from the countries</p>
          <p>Vokalia and Consonantia, there live the blind texts.</p>
        </span>

        <Swiper
          slidesPerView={'auto'}
          navigation
          style={{
            maxWidth: '95%',
            width: '95%',
            marginLeft: '4rem',
          }}
        >
          <Posts>
            <SwiperSlide
              style={{
                maxWidth: '372px',
                minWidth: '255px',
                marginRight: '1rem',
              }}
            >
              <PostCard
                title='Quick-start guide to nuts and seeds'
                imageUrl='components/LandingPage/ReadOurBlog/PostCard/blog_image_1.svg'
                authorName='Kevin Ibrahim'
                authorImageUrl='components/LandingPage/ReadOurBlog/PostCard/author.jpg'
              />
            </SwiperSlide>

            <SwiperSlide
              style={{
                maxWidth: '372px',
                minWidth: '255px',
                marginRight: '1rem',
              }}
            >
              <PostCard
                title='Nutrition: Tips for Improving Your Health'
                imageUrl='components/LandingPage/ReadOurBlog/PostCard/blog_image_2.svg'
                authorName='Mike Jackson'
                authorImageUrl='components/LandingPage/ReadOurBlog/PostCard/author.jpg'
              />
            </SwiperSlide>

            <SwiperSlide
              style={{
                maxWidth: '372px',
                minWidth: '255px',
                marginRight: '1rem',
              }}
            >
              <PostCard
                title='The top 10 benefits of eating healthy'
                imageUrl='components/LandingPage/ReadOurBlog/PostCard/blog_image_3.svg'
                authorName='Bryan McGregor'
                authorImageUrl='components/LandingPage/ReadOurBlog/PostCard/author.jpg'
              />
            </SwiperSlide>

            <SwiperSlide
              style={{
                maxWidth: '372px',
                minWidth: '255px',
                marginRight: '1rem',
              }}
            >
              <PostCard
                title='What Makes a Healthy Diet?'
                imageUrl='components/LandingPage/ReadOurBlog/PostCard/blog_image_4.svg'
                authorName='Joshua'
                authorImageUrl='components/LandingPage/ReadOurBlog/PostCard/author.jpg'
              />
            </SwiperSlide>
          </Posts>
        </Swiper>
      </Content>
    </Container>
  );
}

export default ReadOurBlog;
