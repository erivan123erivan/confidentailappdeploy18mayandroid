import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthState";
import Loader from "./Loader";

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Loader size="50" />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
