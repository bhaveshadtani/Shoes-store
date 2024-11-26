import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Announcement from "./Announcement";

const Layout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!isAuthPage && (
        <>
          <Announcement />
          <Navbar />
        </>
      )}

      {/* Main content */}
      <Outlet />

      {!isAuthPage && <Footer />}
    </>
  );
};

export default Layout;
