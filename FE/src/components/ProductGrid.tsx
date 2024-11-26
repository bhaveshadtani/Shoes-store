import React from "react";

function ProductGrid({ products }: any) {
  return (
    <div className="flex-1 p-6">
      <div className="grid grid-cols-3 gap-6">
        {products.map((product: { id: React.Key | null | undefined; badge: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; image: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md relative"
          >
            {product.badge && (
              <span
                className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded ${
                  product.badge === "NEW"
                    ? "bg-red-500 text-white"
                    : product.badge === "LIMITED"
                    ? "bg-blue-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {product.badge}
              </span>
            )}
            <img
              src={product.image}
              // alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-4 text-gray-800 font-medium">{product.name}</h3>
            <p className="mt-2 text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
