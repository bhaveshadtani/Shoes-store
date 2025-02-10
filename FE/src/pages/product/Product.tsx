import { useEffect, useState } from "react";
import { bestSellingProduct, latestArrivalProduct } from "./core/_request";
import Loader from "../../components/Loader";
import ErrorPage from "../../components/ErrorPage";
import { ProductType } from "./types/product.types";
import { ProductSection } from "./components/ProductSection";
import { useProductPagination } from "./hooks/useProductPagination";

const Product = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState<ProductType[]>([]);
  const [latestArrivalProducts, setLatestArrivalProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const productsPerSection = 4;

  const bestSellingPagination = useProductPagination(bestSellingProducts.length, productsPerSection);

  const latestArrivalPagination = useProductPagination(latestArrivalProducts.length, productsPerSection);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const [bestSellingResponse, latestArrivalResponse] = await Promise.all([
          bestSellingProduct(),
          latestArrivalProduct()
        ])
        if (bestSellingResponse?.status && Array.isArray(bestSellingResponse?.data)) {
          const bestSelling = bestSellingResponse?.data?.filter((prod: ProductType) => prod?.is_featured);
          setBestSellingProducts(bestSelling);
        }
        if (latestArrivalResponse?.status && Array.isArray(latestArrivalResponse?.data)) {
          const latestArrivals = latestArrivalResponse?.data?.filter((prod: ProductType) => !prod?.is_featured);
          setLatestArrivalProducts(latestArrivals);
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <>
      <ProductSection
        title="Best Selling"
        // title="સૌથી વધુ વેચાતા | Best Selling"
        products={bestSellingProducts}
        currentPage={bestSellingPagination.currentPage}
        productsPerPage={productsPerSection}
        onPrevPage={bestSellingPagination.handlePrevPage}
        onNextPage={bestSellingPagination.handleNextPage}
      />
      <ProductSection
        title="Latest Arrivals"
        // title="નવીનતમ આગમન | Latest Arrivals"
        products={latestArrivalProducts}
        currentPage={latestArrivalPagination.currentPage}
        productsPerPage={productsPerSection}
        onPrevPage={latestArrivalPagination.handlePrevPage}
        onNextPage={latestArrivalPagination.handleNextPage}
      />
    </>
  );
};

export default Product;