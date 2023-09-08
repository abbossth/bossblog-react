import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isSignedIn, children }) => {
  if (isSignedIn) {
    return <>{children}</>;
  }
  //   return <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;
