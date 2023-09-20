import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeAuth, showSendCode } from "../../store/actions/modalAction";
import Close from "../../assets/img/ic_close (2).svg";
import { useState } from "react";

const EmailVerification = () => {
  const dispatch = useDispatch();
  const { authModal } = useSelector((state) => state.modalsReducer);
  const hideAuth = () => {
    dispatch(closeAuth());
  };
  const [email, setEmail] = useState("");

  const handleSendCode = () => {
    console.log("Send code handled!");
    dispatch(showSendCode());
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
                <div>
                  <h5 className="modal-title">Elektron pochtani tasdiqlang</h5>
                  <p className="modal-title-desc">
                    Davom etish uchun elektron pochta manzilingizni
                    tasdiqlashingiz kerak.
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
                  className="form-control"
                  id="email"
                  placeholder="Email yoki foydalanuvchi nomini kiriting"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                onClick={handleSendCode}
                className="btn btn-primary text-center w-100"
              >
                Kodni yuborish
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EmailVerification;
