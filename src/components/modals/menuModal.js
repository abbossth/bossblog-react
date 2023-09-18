import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeMenuModal } from "../../store/actions/modalAction";
import Logo from "../../assets/img/logo.svg";
import Close from "../../assets/img/ic_close (2).svg";
import { Link } from "react-router-dom";
import { logOut } from "../../store/actions/loginAction";
import LogOut from "../../assets/img/ic_logout.svg";
import Write from "../../assets/img/ic_write_m.svg";
import About from "../../assets/img/ic_about.svg";
import Search from "../../assets/img/ic_search-topic.svg"

const MenuModal = () => {
  const dispatch = useDispatch();

  const { menuModal } = useSelector((state) => state.modalsReducer);

  const hideMenuModal = () => {
    dispatch(closeMenuModal());
  };

  const logOutHandler = () => {
    dispatch(logOut());
  };
  return (
    <Modal
      show={menuModal}
      onHide={hideMenuModal}
      animation={false}
      className="modal fade es-menu-modal"
      id="menuModal"
      tabIndex="-1"
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
              <Link className="nav-link es-mm-link" to={"/topics"}>
                <img src={Search} />
                Mavzularni qidirish
              </Link>
              <Link className="nav-link es-mm-link" to={"/about"}>
                <img src={About} />
                Loyiha haqida
              </Link>
              <Link className="nav-link es-mm-link" to={"/write-article"}>
                <img src={Write} />
                Yozish
              </Link>
              <Link
                className="nav-link es-mm-link"
                type="button"
                onClick={logOutHandler}
              >
                <img className="es-logout-img" src={LogOut} />
                Chiqish
                <p className="es-dropdown-logout-email">
                  khudoyberdieva1304@gmail.com
                </p>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MenuModal;
