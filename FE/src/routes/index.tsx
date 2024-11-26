import { Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/user/auth/Login";
import Register from "../pages/user/auth/Register";
import Product from "../pages/product/Product";
import ProductDetail from "../pages/product/ProductDetail";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import ProtectedRoutes from "./ProtectedRoutes";
import Layout from "../components/Layout";

const routes = (
  <>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Route>

    {/* Redirect to Home if Already Logged In */}
    <Route
      path="/login"
      element={localStorage.getItem("authToken") ? <Navigate to="/" /> : <Login />}
    />
    <Route
      path="/register"
      element={localStorage.getItem("authToken") ? <Navigate to="/" /> : <Register />
      }
    />

    {/* Protected Routes */}
    <Route element={<ProtectedRoutes />}>
      <Route element={<Layout />}>
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />
    </Route>
    </Route>
  </>
);

export default routes;
