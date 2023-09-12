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
      className="modal fade es-menu-modal"
      id="menuModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="menuModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-full menu-modal-dialog"
        role="document"
      >
        <div className="modal-content">
          <div className="container">
            <div className="modal-header">
              <a href="#">
                <img className="es-mob-modal-logo" src={Logo} alt="logo" />
              </a>
              <button
                type="button"
                className="btn close p-0"
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
          <div className="modal-body">
            <nav className="nav flex-column">
              <a className="nav-link active" href="#">
                Qidiruv
              </a>
              <a className="nav-link" href="#">
                Loyiha haqida
              </a>
              <a className="nav-link" href="#">
                Yozish
              </a>
              <a className="nav-link" href="#">
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
