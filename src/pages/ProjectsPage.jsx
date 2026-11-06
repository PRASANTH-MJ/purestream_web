import PageHeader from '../components/PageHeader';
import QuoteBanner from '../components/QuoteBanner';
import { CaseStudyCard } from '../components/wwtp/Sections';
import { CASE_STUDIES } from '../data/wwtp';

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects & Case Studies"
        crumb="Projects"
        subtitle="Plants we have designed and commissioned, with the actual on-site challenge, the treatment train we built and the outcome."
      />
      <section className="bg-white py-20 transition-colors duration-300 dark:bg-ink-900">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 lg:px-8">
          {CASE_STUDIES.map((cs) => (
            <CaseStudyCard key={cs.slug} cs={cs} expanded />
          ))}
        </div>
      </section>
      <QuoteBanner />
    </>
  );
}
