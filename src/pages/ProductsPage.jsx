import PageHeader from '../components/PageHeader';
import { useSeo } from '../lib/seo';
import ProductGrid from '../components/ProductGrid';

export default function ProductsPage() {
  useSeo('/products');
  return (
    <>
      <PageHeader
        title="Water Purifiers & Filtration"
        subtitle="Alongside our waste water treatment plants, we supply industrial RO, whole-house filtration and drinking-water purifiers for factories, offices and homes."
      />
      <ProductGrid />
    </>
  );
}
