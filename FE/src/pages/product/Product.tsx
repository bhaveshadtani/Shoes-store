import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { filterProduct } from "./core/_request";
import Loader from "../../components/Loader";
import ErrorPage from "../../components/ErrorPage";
import ProductCard from "../../components/ProductCard";

const Product = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  // Show only 3 products by default
  const displayedProducts = products.slice(0, 4);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await filterProduct();
        if (response?.status) {
          setProducts(response?.data?.productData);
        }
      } catch (err) {
        setError("Failed to fetch products.");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <div className="font-[sans-serif] p-4 mx-auto mt-6 lg:max-w-7xl sm:max-w-full">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Best Selling</h2>
          {products.length > 3 && (
            <button
              onClick={() => navigate("/products")}
              className="text-blue-600 font-semibold text-lg"
            >
              Browse All
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>

      <div className="font-[sans-serif] p-4 mx-auto my-6 lg:max-w-7xl sm:max-w-full">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Premium Sneakers</h2>
          {products.length > 3 && (
            <button
              onClick={() => navigate("/products")}
              className="text-blue-600 font-semibold text-lg"
            >
              Browse All
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
