import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeAuth, showAuthSignUp, showEmailVerification } from "../../store/actions/modalAction";
import Close from "../../assets/img/ic_close (2).svg";
import { ReactComponent as AlertIcon } from "../../assets/img/ic_error.svg";
import { useState } from "react";
import axios from "../../api/axios";
import { logIn } from "../../store/actions/loginAction";

const SignIn = () => {
  const [errorData, setErrorData] = useState([]);
  const paths = errorData.map((errorMessage) => errorMessage.path);
  const dispatch = useDispatch();
  const { authModal } = useSelector((state) => state.modalsReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hideAuth = () => {
    dispatch(closeAuth());
  };

  const handleEmailVarification = () => {
    dispatch(showEmailVerification());
  };

  const handleSignIn = async () => {
    const formData = {
      usernameOrEmail: email,
      password,
    };
    try {
      const res = await axios.post(`/users/auth/signin`, formData);
      if (res?.status === 200) {
        dispatch(logIn(res?.data));
        dispatch(closeAuth());
      }
      console.log("signin", res);
    } catch (err) {
      if (err.response.status === 422) {
        setErrorData(err?.response?.data?.message);
      }
      // console.log(`Unhandled Error while Signing In ${err}`);
    }
  };
  console.log("ErrorData", errorData);

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
              <div className="form-group es-form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className={`form-control ${
                    paths.includes("usernameOrEmail") ? "is-invalid" : ""
                  }`}
                  id="email"
                  placeholder="Email yoki foydalanuvchi nomini kiriting"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="email" className="invalid-feedback">
                  <AlertIcon className="me-2" />
                  Error Alert
                </div>
              </div>
              <div className="form-group es-form-group">
                <label for="password">Parol</label>
                <input
                  type="password"
                  className={`form-control ${
                    paths.includes("password") ? "is-invalid" : ""
                  }`}
                  id="password"
                  placeholder="Parolni kiriting"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div id="password" className="invalid-feedback">
                  <AlertIcon className="me-2" />
                  Error Alert
                </div>
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
                <button className="btn" onClick={() => dispatch(handleEmailVarification())}>
                  Parolni unutdingizmi?
                </button>
              </div>
              <button
                onClick={handleSignIn}
                className="btn btn-primary text-center w-100"
              >
                Kirish
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
                onClick={() => dispatch(showAuthSignUp())}
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

export default SignIn;
