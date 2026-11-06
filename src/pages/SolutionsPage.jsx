import PageHeader from '../components/PageHeader';
import QuoteBanner from '../components/QuoteBanner';
import { SolutionsGrid, ProcessSection, HowWeWork, Faq, TechnologySection, WhyChoose } from '../components/wwtp/Sections';

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        title="Waste Water Treatment Solutions"
        crumb="Solutions"
        subtitle="ETPs, STPs, modular packaged plants and water recycling systems from 2 to 100 KLD, designed to meet PCB norms and reuse standards."
      />
      <SolutionsGrid detailed />
      <TechnologySection />
      <WhyChoose />
      <ProcessSection />
      <HowWeWork />
      <Faq />
      <QuoteBanner />
    </>
  );
}
