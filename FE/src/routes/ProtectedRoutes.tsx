import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectToken } from "../pages/user/auth/userSlice";

const ProtectedRoutes = () => {
  const token = useSelector(selectToken);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Renders the child routes (cart, checkout, etc.)
};

export default ProtectedRoutes;
