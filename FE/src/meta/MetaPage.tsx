import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default function MetaPage() {
  const location = useLocation();
  const path = location.pathname;

  // Default meta values
  let metaTitle = "SoleVibe - Walk with Vibe";
  let metaDescription =
    "Explore stylish and comfortable shoes to keep you walking with vibe. Shop the latest collection at SoleVibe.";

  // Meta content for different pages
  if (path === "/product") {
    metaTitle = "Our Products - SoleVibe";
    metaDescription =
      "Discover the best collection of footwear at SoleVibe. Choose from sneakers, boots, and more to find your perfect fit.";
  } else if (path.startsWith("/product-detail")) {
    // Extract product name or ID from the URL to customize the meta tags
    const productName = "Stylish Running Shoes"; // Replace dynamically if necessary
    metaTitle = `${productName} - SoleVibe`;
    metaDescription = `Shop the ${productName} at SoleVibe. Comfortable, trendy, and perfect for all your walking needs.`;
  } else if (path === "/cart") {
    metaTitle = "Your Cart - SoleVibe";
    metaDescription =
      "Review the items in your cart at SoleVibe. Don't forget to checkout for a stylish new pair of shoes!";
  } else if (path === "/checkout") {
    metaTitle = "Checkout - SoleVibe";
    metaDescription =
      "Finalize your order at SoleVibe. Secure payment options for the best footwear delivered to your door.";
  } else if (path === "/about-us") {
    metaTitle = "About Us - SoleVibe";
    metaDescription =
      "Learn more about SoleVibe, our journey, and how we bring quality, stylish shoes to your doorstep.";
  }

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  );
}
