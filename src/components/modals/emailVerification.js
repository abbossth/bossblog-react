import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeAuth } from "../../store/actions/modalAction";
import Close from "../../assets/img/ic_close (2).svg";

const EmailVerification = () => {
  const dispatch = useDispatch();
  const { authModal } = useSelector((state) => state.modalsReducer);
  const hideAuth = () => {
    dispatch(closeAuth());
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
                {/* <svg
                  width="32"
                  height="32"
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
                </svg> */}

                <div>
                  <h5 className="modal-title">Emailingizni Tasdiqlang</h5>
                  {/* <p className="modal-title-desc">
                    Bilim ulashish har doim yaxshi
                  </p> */}
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
              Elektron pochtangizga tasqilash xabari yuborildi. Iltimos,
              emailingizni tasqilang!
            </div>
          </div>
          {/* <div className="modal-footer">
            <div className="container">
              <div className="es-modal-login w-100">
                Sizda allaqachon hisob mavjudmi?
              </div>
              <button
                className="btn es-btn-login"
                onClick={() => dispatch(showAuthSignIn())}
              >
                Kirish
              </button>
            </div>
          </div> */}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EmailVerification;
