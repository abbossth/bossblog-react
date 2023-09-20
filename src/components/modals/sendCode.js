import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeAuth, showSendCode } from "../../store/actions/modalAction";
import Close from "../../assets/img/ic_close (2).svg";
import { useState } from "react";

const SendCode = () => {
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
        <div class="modal-content">
          <div className="container">
            <div className="modal-header">
              <div className="es-modal-content-header">
                <div>
                  <h5 className="modal-title">Kodni kiriting</h5>
                  <p className="modal-title-desc">
                    Elektron pochta manzilingizni yuborilgan tasdiqlash kodini
                    kiriting
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
          <div class="modal-body">
            <div class="container">
              <div class="form-group es-form-group" name="one-time-code">
                <fieldset>
                  <label for="otc-1">Number 1</label>
                  <label for="otc-2">Number 2</label>
                  <label for="otc-3">Number 3</label>
                  <label for="otc-4">Number 4</label>
                  <label for="otc-5">Number 5</label>
                  <label for="otc-6">Number 6</label>
                  <div>
                    <input
                      class="is-invalid"
                      type="number"
                      pattern="[0-9]*"
                      min="0"
                      max="9"
                      maxlength="1"
                      value=""
                      inputtype="numeric"
                      id="otc-1"
                      required
                    />
                    <input
                      class="is-invalid"
                      type="number"
                      pattern="[0-9]*"
                      min="0"
                      max="9"
                      maxlength="1"
                      value=""
                      inputtype="numeric"
                      id="otc-2"
                      required
                    />
                    <input
                      class="is-invalid"
                      type="number"
                      pattern="[0-9]*"
                      min="0"
                      max="9"
                      maxlength="1"
                      value=""
                      inputtype="numeric"
                      id="otc-3"
                      required
                    />
                    <input
                      class="is-invalid"
                      type="number"
                      pattern="[0-9]*"
                      min="0"
                      max="9"
                      maxlength="1"
                      value=""
                      inputtype="numeric"
                      id="otc-4"
                      required
                    />
                    <input
                      class="is-invalid"
                      type="number"
                      pattern="[0-9]*"
                      min="0"
                      max="9"
                      maxlength="1"
                      value=""
                      inputtype="numeric"
                      id="otc-5"
                      required
                    />
                    <input
                      class="is-invalid"
                      type="number"
                      pattern="[0-9]*"
                      min="0"
                      max="9"
                      maxlength="1"
                      value=""
                      inputtype="numeric"
                      id="otc-6"
                      required
                    />
                  </div>
                </fieldset>
              </div>
              <div class="es-code-again">
                Kodni olmadingizmi?
                <button class="btn">Qayta yuborish</button> <br /> 01:00 da
                tugaydi
              </div>
              <button class="btn es-btn-auth w-100 mb-5">
                Ro‘yhatdan o‘tish
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SendCode;

// import React from "react";
// import { Modal } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { closeAuth } from "../../store/actions/modalAction";
// import Close from "../../assets/img/ic_close (2).svg";

// const SendCode = () => {
//   const { authModal } = useSelector((state) => state.modalsReducer);
//   const dispatch = useDispatch();

//   const hideAuth = () => {
//     dispatch(closeAuth());
//   };
//   return (
//     <Modal
//       show={authModal}
//       onHide={hideAuth}
//       animation={false}
//       class="modal fade"
//       id="codeModal"
//       tabindex="-1"
//       aria-labelledby="codeModalLabel"
//       aria-hidden="true"
//     >
// <div class="modal-dialog">
//   <div class="modal-content">
//     <div class="container">
//       <div class="modal-header">
//         <div class="es-modal-content-header">
//           <h5 class="modal-title" id="codeModalLabel">
//             Ro‘yhatdan o‘tish
//           </h5>
//           <p class="modal-title-desc">
//             Tasdiqlash uchun sizga 4 xonali kod yubordik elektron pochta
//             manzilingiz (desx@gmail.com). Quyidagi maydonga kiriting.
//           </p>
//         </div>
//         <button
//           type="button"
//           class="close"
//           data-dismiss="modal"
//           aria-label="Close"
//         >
//           <span aria-hidden="true">
//             <img src={Close} alt="close" />
//           </span>
//         </button>
//       </div>
//     </div>
//     <div class="modal-body">
//       <div class="container">
//         <div class="form-group es-form-group" name="one-time-code">
//           <fieldset>
//             <label for="otc-1">Number 1</label>
//             <label for="otc-2">Number 2</label>
//             <label for="otc-3">Number 3</label>
//             <label for="otc-4">Number 4</label>
//             <label for="otc-5">Number 5</label>
//             <label for="otc-6">Number 6</label>
//             <div>
//               <input
//                 class="is-invalid"
//                 type="number"
//                 pattern="[0-9]*"
//                 min="0"
//                 max="9"
//                 maxlength="1"
//                 value=""
//                 inputtype="numeric"
//                 id="otc-1"
//                 required
//               />
//               <input
//                 class="is-invalid"
//                 type="number"
//                 pattern="[0-9]*"
//                 min="0"
//                 max="9"
//                 maxlength="1"
//                 value=""
//                 inputtype="numeric"
//                 id="otc-2"
//                 required
//               />
//               <input
//                 class="is-invalid"
//                 type="number"
//                 pattern="[0-9]*"
//                 min="0"
//                 max="9"
//                 maxlength="1"
//                 value=""
//                 inputtype="numeric"
//                 id="otc-3"
//                 required
//               />
//               <input
//                 class="is-invalid"
//                 type="number"
//                 pattern="[0-9]*"
//                 min="0"
//                 max="9"
//                 maxlength="1"
//                 value=""
//                 inputtype="numeric"
//                 id="otc-4"
//                 required
//               />
//               <input
//                 class="is-invalid"
//                 type="number"
//                 pattern="[0-9]*"
//                 min="0"
//                 max="9"
//                 maxlength="1"
//                 value=""
//                 inputtype="numeric"
//                 id="otc-5"
//                 required
//               />
//               <input
//                 class="is-invalid"
//                 type="number"
//                 pattern="[0-9]*"
//                 min="0"
//                 max="9"
//                 maxlength="1"
//                 value=""
//                 inputtype="numeric"
//                 id="otc-6"
//                 required
//               />
//             </div>
//           </fieldset>
//         </div>
//         <div class="es-code-again">
//           Kodni olmadingizmi?
//           <button class="btn">Qayta yuborish</button> <br /> 01:00 da
//           tugaydi
//         </div>
//         <button class="btn es-btn-auth w-100 mb-5">
//           Ro‘yhatdan o‘tish
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
//     </Modal>
//   );
// };

// export default SendCode;
