import { Navigate, Outlet } from "react-router-dom";
import { RoutesObject } from "../../utils/Routes/Routes";

function ProtectedRoute({ isAuth }) {
  
  return isAuth ? <Outlet/> : <Navigate to={RoutesObject.LOGIN} />;
  
}

export default ProtectedRoute