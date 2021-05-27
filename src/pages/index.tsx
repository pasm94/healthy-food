import Footer from '@/components/Footer';
import HealthyFood from '@/components/LandingPage/HealthyFood';
import JoinOurMembership from '@/components/LandingPage/JoinOurMembership';
import OurBestRecipes from '@/components/LandingPage/OurBestRecipes';
import ReadOurBlog from '@/components/LandingPage/ReadOurBlog';
import TheBestServices from '@/components/LandingPage/TheBestServices';
import { Container } from '@/styles/pages/LandingPage';
import Head from 'next/head';
import React from 'react';

const LandingPage = () => {
  return (
    <Container>
      <Head>
        <title>Healthy Food | Home</title>
      </Head>
      <HealthyFood />
      <OurBestRecipes />
      <TheBestServices />
      <ReadOurBlog />
      <JoinOurMembership />
      <Footer />
    </Container>
  );
};

export default LandingPage;
