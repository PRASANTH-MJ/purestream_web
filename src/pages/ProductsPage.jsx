import PageHeader from '../components/PageHeader';
import ProductGrid from '../components/ProductGrid';

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        subtitle="Domestic & industrial RO/UV purifiers, whole-house filtration, booster pumps, kitchen appliances and spares — the complete PureStream range."
      />
      <ProductGrid />
    </>
  );
}
