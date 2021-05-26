import HealthyFood from '@/components/LandingPage/HealthyFood';
import OurBestRecipes from '@/components/LandingPage/OurBestRecipes';
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
    </Container>
  );
};

export default LandingPage;
