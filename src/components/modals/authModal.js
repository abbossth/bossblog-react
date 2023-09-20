import { useSelector } from "react-redux";
import { MODAL_TYPES } from "../../utils/utils";
import SignInAuthOptions from "./signInAuthOptions";
import SignUpAuthOptions from "./signUpAuthOptions";
import SignIn from "./signIn";
import SignUp from "./signUp";
import EmailVerification from "./emailVerification";
import SendCode from "./sendCode";

const AuthModal = () => {
  const { store } = useSelector((state) => state.modalsReducer);

  const MODAL_COMPONENTS = {
    [MODAL_TYPES.SIGN_IN_OPTIONS]: <SignInAuthOptions />,
    [MODAL_TYPES.SIGN_UP_OPTIONS]: <SignUpAuthOptions />,
    [MODAL_TYPES.SIGN_IN]: <SignIn />,
    [MODAL_TYPES.SIGN_UP]: <SignUp />,
    [MODAL_TYPES.EMAIL_VERIFICATION]: <EmailVerification />,
    [MODAL_TYPES.CODE_VERIFICATION]: <SendCode />,
  };
  console.log(store);

  if (store.modalType === null) {
    return <></>;
  } else {
    return MODAL_COMPONENTS[store.modalType];
  }
};

export default AuthModal;
