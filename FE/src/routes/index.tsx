import { Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/user/auth/Login";
import Register from "../pages/user/auth/Register";
import Product from "../pages/product/Product";
import ProductDetail from "../pages/product/ProductDetail";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import ProtectedRoutes from "./ProtectedRoutes";

const routes = (
  <>
    {/* Home Route */}
    <Route path="/" element={<Home />} />

    {/* Redirect to Home if Already Logged In */}
    <Route
      path="/login"
      element={
        localStorage.getItem("authToken") !== null ? (
          <Navigate to="/" replace />
        ) : (
          <Login />
        )
      }
    />
    <Route
      path="/register"
      element={
        localStorage.getItem("authToken") !== null ? (
          <Navigate to="/" replace />
        ) : (
          <Register />
        )
      }
    />

    {/* Product Route */}
    <Route path="/product" element={<Product />} />
    <Route path="/cart" element={<Cart />} />

    {/* Protected Routes */}
    <Route element={<ProtectedRoutes />}>
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />
    </Route>
  </>
);

export default routes;