import { Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import routes from "./routes";
import Announcement from "./components/Announcement";
import ShoeCarousel from "./components/ShoeCarousel";
import Product from "./pages/product/Product";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Announcement />
      <Navbar />
      {/* <ShoeCarousel /> */}
      {/* <Product /> */}
      <Routes>{routes}</Routes>
    </>
  );
};

export default App;
