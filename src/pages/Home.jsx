import Hero from '../components/Hero';
import PerksBanner from '../components/PerksBanner';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutUs from '../components/AboutUs';
import QuoteBanner from '../components/QuoteBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <PerksBanner />
      <FeaturedProducts />
      <AboutUs />
      <QuoteBanner />
    </>
  );
}
