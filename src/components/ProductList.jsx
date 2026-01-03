import ProductTable from './ProductTable';
import ProductGrid from './ProductGrid';

function ProductList({ products, viewType, onEdit }) {
  if (!products.length) {
    return (
      <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900/60 p-6 text-center text-sm text-slate-400">
        No products found.
      </div>
    );
  }

  return viewType === 'table' ? (
    <ProductTable products={products} onEdit={onEdit} />
  ) : (
    <ProductGrid products={products} onEdit={onEdit} />
  );
}

export default ProductList;

