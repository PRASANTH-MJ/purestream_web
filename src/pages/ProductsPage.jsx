import PageHeader from '../components/PageHeader';
import ProductGrid from '../components/ProductGrid';

export default function ProductsPage() {
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
