import { ProductSectionProps } from '../types/product.types';
import { ProductNavigation } from './ProductNavigation';
import ProductCard from './ProductCard';

export const ProductSection = ({ title, products, currentPage, productsPerPage, onPrevPage, onNextPage }: ProductSectionProps) => {
  const displayedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="font-[sans-serif] p-4 mx-auto my-6 lg:max-w-7xl sm:max-w-full">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">{title}</h2>
        <ProductNavigation
          currentPage={currentPage}
          totalItems={products.length}
          itemsPerPage={productsPerPage}
          onPrev={onPrevPage}
          onNext={onNextPage}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};