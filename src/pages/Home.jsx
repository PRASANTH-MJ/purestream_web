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
  TechnologySection,
  WhyChoose,
} from '../components/wwtp/Sections';

export default function Home() {
  return (
    <>
      <Hero />
      <PerksBanner />
      <SolutionsGrid />
      <TechnologySection />
      <ProcessSection />
      <IndustriesGrid />
      <CaseStudies />
      <WhyChoose />
      <HowWeWork />
      <AboutUs />
      <Faq />
      <QuoteBanner />
    </>
  );
}
