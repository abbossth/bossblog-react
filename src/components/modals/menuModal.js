import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeMenuModal } from "../../store/actions/modalAction";
import Logo from "../../assets/img/logo.svg";
import Close from "../../assets/img/ic_close (2).svg";

const MenuModal = () => {
 const dispatch = useDispatch();

 const { menuModal } = useSelector((state) => state.modalsReducer);

 const hideMenuModal = () => {
  dispatch(closeMenuModal());
  };
  return (
    <Modal
      show={menuModal}
      onHide={hideMenuModal}
      animation={false}
      class="modal fade es-menu-modal"
      id="menuModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="menuModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-full menu-modal-dialog" role="document">
        <div class="modal-content">
          <div class="container">
            <div class="modal-header">
              <a href="#">
                <img
                  class="es-mob-modal-logo"
                  src={Logo}
                  alt="logo"
                />
              </a>
              <button
                type="button"
                class="btn close p-0"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hideMenuModal}
              >
                <span aria-hidden="true">
                <img src={Close} alt="close" />
                </span>
              </button>
            </div>
          </div>
          <div class="modal-body">
            <nav class="nav flex-column">
              <a class="nav-link active" href="#">
                Qidiruv
              </a>
              <a class="nav-link" href="#">
                Loyiha haqida
              </a>
              <a class="nav-link" href="#">
                Yozish
              </a>
              <a class="nav-link" href="#">
                Kirish
              </a>
            </nav>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MenuModal;
