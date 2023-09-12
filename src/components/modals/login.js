import { Modal } from "react-bootstrap";
import { closeAuth } from "../../store/actions/modalAction";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/actions/loginAction";
import Close from "../../assets/img/ic_close (2).svg";
import Google from "../../assets/img/ic_google.svg";
import Email from "../../assets/img/ic_email.svg";

const Login = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.loginReducer);
  const logInHandler = () => {
    dispatch(logIn());
  };

  const hideAuth = () => {
    dispatch(closeAuth());
  };

  console.log(loggedIn);
  return (
    <div>
      <button type="button" onClick={logInHandler}>
        Log in
      </button>
    </div>
    // <Modal
    //   show={logIn}
    //   onHide={hideAuth}
    //   animation={false}
    // >
    //   <Modal.Body className="modal-dialog m-0">
    //     <div className="modal-content">
    //       <div className="container">
    //         <div className="modal-header">
    //           <div className="es-modal-content-header">
    //             <h5 className="modal-title">BossBlogga Qo'shilish</h5>
    //             <p className="modal-title-desc">
    //               Bilim ulashish har doim yaxshi
    //             </p>
    //           </div>
    //           <button
    //             type="button"
    //             className="btn close p-0"
    //             data-dismiss="modal"
    //             aria-label="Close"
    //             onClick={hideAuth}
    //           >
    //             <span aria-hidden="true">
    //               <img src={Close} alt="close" />
    //             </span>
    //           </button>
    //         </div>
    //       </div>
    //       <div className="modal-body">
    //         <div className="container">
    //           <button className="btn es-google-btn w-100">
    //             <img src={Google} alt="google" />
    //             Google bilan kirish
    //             <div></div>
    //           </button>
    //           <button className="btn es-btn-auth w-100">
    //           <img src={Email} alt="google" />
    //             Email bilan kirish
    //             <div></div>
    //           </button>
    //         </div>
    //       </div>
    //       <div className="modal-footer">
    //         <div className="container">
    //           <div className="es-modal-login w-100">
    //             Sizda hisob mavjud emasmi?
    //           </div>
    //           <button className="btn es-btn-login">Boshlash</button>
    //         </div>
    //       </div>
    //     </div>
    //   </Modal.Body>
    // </Modal>
  );
};

export default Login;
