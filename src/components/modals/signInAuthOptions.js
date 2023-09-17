import { Modal } from "react-bootstrap";
import {
  closeAuth,
  showAuthSignIn,
  showAuthSignUp,
  showAuthSignUpOptions,
} from "../../store/actions/modalAction";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/actions/loginAction";
import Close from "../../assets/img/ic_close (2).svg";
import Google from "../../assets/img/ic_google.svg";
import Email from "../../assets/img/ic_email.svg";

const SignInAuthOptions = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.loginReducer);
  const { authModal } = useSelector((state) => state.modalsReducer);
  const logInHandler = () => {
    dispatch(logIn());
  };

  const hideAuth = () => {
    dispatch(closeAuth());
  };

  const handleEmailSignIn = () => {
    dispatch(showAuthSignIn());
  };

  const handleGoogleSignIn = () => {
    // dispatch(showAuthSignIn());
  };

  console.log(loggedIn);
  return (
    <Modal
      show={authModal}
      onHide={hideAuth}
      animation={false}
      className="modal fade"
      id="authModal"
    >
      <Modal.Body className="modal-dialog m-0">
        <div className="modal-content">
          <div className="container">
            <div className="modal-header">
              <div className="es-modal-content-header">
                <svg
                  width="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 16C20.42 16 24 12.42 24 8C24 3.58 20.42 0 16 0C11.58 0 8 3.58 8 8C8 12.42 11.58 16 16 16ZM16 20C10.66 20 0 22.68 0 28V30C0 31.1 0.9 32 2 32H30C31.1 32 32 31.1 32 30V28C32 22.68 21.34 20 16 20Z"
                    fill="#969696"
                  />
                </svg>

                <div>
                  <h5 className="modal-title">Kirish</h5>
                  <p className="modal-title-desc">
                    Bilim ulashish har doim yaxshi
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="btn close p-0"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hideAuth}
              >
                <span aria-hidden="true">
                  <img src={Close} alt="close" />
                </span>
              </button>
            </div>
          </div>
          <div className="modal-body">
            <div className="container">
              <button
                onClick={handleGoogleSignIn}
                className="btn es-google-btn w-100"
              >
                <img src={Google} alt="google" />
                Google bilan kirish
                <div></div>
              </button>
              <button
                onClick={handleEmailSignIn}
                className="btn es-btn-auth w-100"
              >
                <img src={Email} alt="google" />
                Email bilan kirish
                <div></div>
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <div className="container">
              <div className="es-modal-login w-100">
                Sizda hisob mavjud emasmi?
              </div>
              <button
                className="btn es-btn-login"
                onClick={() => dispatch(showAuthSignUpOptions())}
              >
                Ro'yhatdan O'tish
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignInAuthOptions;
