import { ProductType } from "../types/product.types";
import dummyImage from "../../../assets/images/dummy-image.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';

const ProductCard = ({ product }: { product: ProductType }) => {
  const discountPercent = Math.round(((parseFloat(product.discount) - parseFloat(product.unit_price)) / parseFloat(product.unit_price)) * 100)
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden group transition-all transform hover:scale-105 hover:shadow-xl cursor-pointer relative">
      <div className="absolute top-3 right-3 bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-200 transition z-10">
        <FontAwesomeIcon icon={faHeartOutline} className="text-red-500 text-xl" />
      </div>

      {product.discount && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold py-1 px-3 rounded-full z-20">
          {discountPercent}%
          OFF
        </span>
      )}

      {/* Image Section */}
      <div className="relative w-full h-[280px] overflow-hidden">
        <img
          src={product.image || dummyImage}
          alt={product.imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 z-0"
        />
      </div>

      {/* Product Info Section */}
      <div className="px-5 py-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-800 truncate max-w-full">
          {product.gender}{`'s`} {product.color} {product.name}
        </h3>
        <div className="flex items-center mt-2 space-x-2">
          <span className="text-lg font-bold text-green-700">&#8377;{product.unit_price}</span>
          {product.discount && (
            <span className="text-sm text-red-600 line-through">&#8377;{product.discount}</span>
          )}
        </div>
        <div className="flex items-center mt-3">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm" />
          <span className="ml-1 text-sm text-gray-600">{product?.average_rating || "No Rating"}</span>
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;