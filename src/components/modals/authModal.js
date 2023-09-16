import { useSelector } from "react-redux";
import { MODAL_TYPES } from "../../utils/utils";
import SignInAuthOptions from "./signInAuthOptions";
import SignUpAuthOptions from "./signUpAuthOptions";

const AuthModal = () => {
  const { store } = useSelector((state) => state.modalsReducer);

  const MODAL_COMPONENTS = {
    [MODAL_TYPES.SIGN_IN_MODAL]: <SignInAuthOptions />,
    [MODAL_TYPES.SIGN_UP_MODAL]: <SignUpAuthOptions />,
  };
  console.log(store);

  if (store.modalType === null) {
    return <></>;
  } else {
    return MODAL_COMPONENTS[store.modalType];
  }
};

export default AuthModal;
