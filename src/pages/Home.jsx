import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import PopularProducts from '../components/PopularProducts';
import ProductQualitySection from '../components/ProductQualitySection';
import TestimonialsSection from '../components/TestimonialsSection';
import ArticlesSection from '../components/ArticlesSection';
import FooterSection from '../components/FooterSection';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <BenefitsSection />
      <PopularProducts />
      <ProductQualitySection />
      <TestimonialsSection />
      <ArticlesSection />
      <FooterSection />
    </>
  );
};

export default Home;