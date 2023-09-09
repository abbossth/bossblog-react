import { useDispatch } from "react-redux";
import { logOut } from "../store/actions/loginAction";
import { loadMoreArticles } from "../store/actions/articleAction";

const ProtectedRoute = ({ isSignedIn, children }) => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());
  };
  const loadMoreHandler = () => {
    dispatch(loadMoreArticles());
  };
  if (isSignedIn) {
    return (
      <>
        {children}
        <button type="button" onClick={logOutHandler}>
          Log out
        </button>
        <button type="button" onClick={loadMoreHandler}>
          Load More Articles
        </button>
      </>
    );
  }
};

export default ProtectedRoute;
