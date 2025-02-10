const ProductGrid = ({ products }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product: any) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-auto overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">{product.price}</span>
              {product.badge && (
                <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {product.badge}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;