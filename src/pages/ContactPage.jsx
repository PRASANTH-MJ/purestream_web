import PageHeader from '../components/PageHeader';
import { useSeo } from '../lib/seo';
import ContactSection from '../components/ContactSection';
import GoogleProfile from '../components/GoogleProfile';

export default function ContactPage() {
  useSeo('/contact-us');
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We will get back to you as soon as possible. Your satisfaction is our priority."
      />
      <ContactSection />
      <GoogleProfile />
    </>
  );
}
