import Hero from '../components/Hero';
import PerksBanner from '../components/PerksBanner';
import AboutUs from '../components/AboutUs';
import QuoteBanner from '../components/QuoteBanner';
import {
  SolutionsGrid,
  ProcessSection,
  IndustriesGrid,
  CaseStudies,
  HowWeWork,
  Faq,
} from '../components/wwtp/Sections';

export default function Home() {
  return (
    <>
      <Hero />
      <PerksBanner />
      <SolutionsGrid />
      <ProcessSection />
      <IndustriesGrid />
      <CaseStudies />
      <HowWeWork />
      <AboutUs />
      <Faq />
      <QuoteBanner />
    </>
  );
}
