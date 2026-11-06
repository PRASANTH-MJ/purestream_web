import PageHeader from '../components/PageHeader';
import QuoteBanner from '../components/QuoteBanner';
import { IndustriesGrid, CaseStudies } from '../components/wwtp/Sections';

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Industries We Serve"
        crumb="Industries"
        subtitle="Each industry's effluent behaves differently. We test yours on site before designing anything."
      />
      <IndustriesGrid compact />
      <CaseStudies />
      <QuoteBanner />
    </>
  );
}
