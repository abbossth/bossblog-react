import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/actions/loginAction";

const Login = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.loginReducer);
  const logInHandler = () => {
    dispatch(logIn());
  };

  console.log(loggedIn);
  return (
    <div>
      <button type="button" onClick={logInHandler}>
        Log in
      </button>
    </div>
  );
};

export default Login;
