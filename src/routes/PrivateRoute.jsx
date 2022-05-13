import { Navigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const {
    auth: { token },
  } = useSelector(state => state);

  const location = useLocation();

  return token ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};

export { PrivateRoute };
