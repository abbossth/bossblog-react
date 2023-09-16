import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  closeAuth,
  showAuthSignIn,
  showAuthSignInOptions,
  showAuthSignUp,
} from "../../store/actions/modalAction";
import Close from "../../assets/img/ic_close (2).svg";
import Google from "../../assets/img/ic_google.svg";
import Email from "../../assets/img/ic_email.svg";

const SignUpAuthOptions = () => {
  const { authModal } = useSelector((state) => state.modalsReducer);
  const dispatch = useDispatch();
  const hideAuth = () => {
    dispatch(closeAuth());
  };
  const handleEmailSignUp = () => {
    dispatch(showAuthSignUp());
  };
  const handleGoogleSignUp = () => {};
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 16C20.42 16 24 12.42 24 8C24 3.58 20.42 0 16 0C11.58 0 8 3.58 8 8C8 12.42 11.58 16 16 16ZM16 20C10.66 20 0 22.68 0 28V30C0 31.1 0.9 32 2 32H30C31.1 32 32 31.1 32 30V28C32 22.68 21.34 20 16 20Z"
                    fill="#969696"
                  />
                </svg>

                <div>
                  <h5 className="modal-title">Ro'yhatdan O'tish</h5>
                  <p className="modal-title-desc">
                    Bilim olish har doim yaxshi
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
              {/* <div className="form-group es-form-group">
            <label for="fullname">F.I.O kiriting</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              placeholder="Akbarali"
            />
          </div>
          <div className="form-group es-form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="akbaralikhasanov2000@gmail.com"
            />
          </div>
          <div className="form-group es-form-group">
            <label for="password">Parol yarating</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="form-group es-form-group es-form-password">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="savePassword"
              />
              <label className="form-check-label" for="savePassword">
                Eslab qolish
              </label>
            </div>
            <button className="btn" href="#">
              Parolni unutdingizmi?
            </button>
          </div>
          <div className="form-group es-form-group">
            <label for="passwordConfirm">Parolni tasdiqlash</label>
            <input
              type="password"
              className="form-control is-invalid"
              id="passwordConfirm"
              required
            />
            <div id="passwordConfirm" className="invalid-feedback">
              <img src="img/ic_error.svg" alt="error" />
              Error Alert
            </div>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="privacyCheck"
            />
            <label className="form-check-label" for="privacyCheck">
              Ro’yhatdan o’tish tugmasini bosish orqali men{" "}
              <a href="#">sayt maxfiylik</a>
              siyosatiga rozilik bildiraman.
            </label>
          </div> */}
              <button
                onClick={handleGoogleSignUp}
                className="btn es-google-btn w-100"
              >
                <img src={Google} alt="google" />
                Google bilan ro'yhatdan o'tish
                <div></div>
              </button>
              <button
                onClick={handleEmailSignUp}
                className="btn es-btn-auth w-100"
              >
                <img src={Email} alt="google" />
                Email bilan ro'yhatdan o'tish
                <div></div>
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <div className="container">
              <div className="es-modal-login w-100">
                Sizda allaqachon hisob mavjudmi?
              </div>
              <button
                className="btn es-btn-login"
                onClick={() => dispatch(showAuthSignInOptions())}
              >
                Kirish
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignUpAuthOptions;
