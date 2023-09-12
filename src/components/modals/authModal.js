import { Modal } from "react-bootstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAuth } from "../../store/actions/modalAction";
import Close from "../../assets/img/ic_close (2).svg";
import Google from "../../assets/img/ic_google.svg";
import Email from "../../assets/img/ic_email.svg";

const AuthModal = () => {
  const { authModal } = useSelector((state) => state.modalsReducer);
  const dispatch = useDispatch();


  const hideAuth = () => {
    dispatch(closeAuth());
    // dispatch(setPhone(""));
    // dispatch(setIsCodeSent(false));
    // setIncorPhoneNumber("");
    // setIncorConfCode("");
  };
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
                <h5 className="modal-title">BossBlogga Qo'shilish</h5>
                <p className="modal-title-desc">
                  Bilim ulashish har doim yaxshi
                </p>
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
              <button className="btn es-google-btn w-100">
                <img src={Google} alt="google" />
                Google bilan boshlash
                <div></div>
              </button>
              <button className="btn es-btn-auth w-100">
              <img src={Email} alt="google" />
                Email bilan boshlash
                <div></div>
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <div className="container">
              <div className="es-modal-login w-100">
                Sizda allaqachon hisob mavjudmi?
              </div>
              <button className="btn es-btn-login">Kirish</button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
