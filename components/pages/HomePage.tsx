
import React from 'react';
import { HeroCarousel } from '../HeroCarousel';
import { ServicesSection } from '../ServicesSection';
import { Brands } from '../Brands';
import { Process } from '../Process';
import { Testimonials } from '../Testimonials';
import { MidCTA } from '../MidCTA';
import { VideoSection } from '../VideoSection';
import { TeamSection } from '../TeamSection';
import { FAQ } from '../FAQ';
import { WarrantySection } from '../WarrantySection';
import { ServiceMap } from '../ServiceMap';
import { EmergencySection } from '../EmergencySection';
import { SEOContent } from '../SEOContent';
import { BlogTeaser } from '../BlogTeaser';
import { StatsCounter } from '../StatsCounter';
import { NavigateFn } from '../../App';

interface HomePageProps {
  navigate: NavigateFn;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <>
      <HeroCarousel />
      <ServicesSection />
      <Brands />
      <Process />
      <StatsCounter />
      <Testimonials />
      <BlogTeaser navigate={navigate} />
      <MidCTA />
      <VideoSection navigate={navigate} />
      <TeamSection />
      <FAQ />
      <WarrantySection />
      <ServiceMap />
      <EmergencySection />
      <SEOContent />
    </>
  );
};
