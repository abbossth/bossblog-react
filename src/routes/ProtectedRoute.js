import { useDispatch } from "react-redux";
import { logOut } from "../store/actions/loginAction";
import { loadMoreArticles } from "../store/actions/articleAction";

const ProtectedRoute = ({ isSignedIn, children }) => {
  if (isSignedIn) {
    return (
      <>
        {children}
      </>
    );
  }
};

export default ProtectedRoute;
