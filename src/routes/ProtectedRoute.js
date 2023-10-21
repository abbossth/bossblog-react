const ProtectedRoute = ({ isSignedIn, children }) => {
  if (isSignedIn) {
    return <>{children}</>;
  }
};

export default ProtectedRoute;
