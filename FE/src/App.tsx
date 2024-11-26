import { Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import routes from "./routes";
import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([
    // Sample product data
    {
      id: 1,
      name: "Nike Sport Shoes V2.04",
      price: "$199.00",
      badge: "NEW",
      image: "https://readymadeui.com/images/product1.webp",
    },
    {
      id: 2,
      name: "White Label Cap",
      price: "$49.89",
      badge: "LIMITED",
      image: "https://readymadeui.com/images/product2.webp",
    },
    {
      id: 3,
      name: "Nike Sport Shoes V2.04",
      price: "$199.00",
      badge: "SALE",
      image: "https://readymadeui.com/images/product3.webp",
    },
    // Add more products as needed
  ]);

  return (
    <>
      {/* <ToastContainer /> */}
      {/* <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />
        <ProductGrid products={products} />
        </div> */}
      <Routes>{routes}</Routes>
    </>
  );
};

export default App;
