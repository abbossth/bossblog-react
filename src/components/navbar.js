import { useDispatch, useSelector } from "react-redux";
import Search from "../assets/img/ic_search.svg";
import MenuModal from "../assets/img/ic_mob_menu.svg";
import LogOut from "../assets/img/ic_logout.svg";
import {
  showAuthSignIn,
  showAuthSignInOptions,
  showAuthSignUp,
  showAuthSignUpOptions,
  showMenuModal,
} from "../store/actions/modalAction";
import { logIn, logOut } from "../store/actions/loginAction";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.loginReducer);
  const { userInfo } = useSelector((state) => state.userInfoReducer);
  const { pathname } = useLocation();
  const isWritePage = pathname === "/write";

  const logOutHandler = () => {
    dispatch(logOut());
  };

  return (
    <header className="es-main-navbar">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav">
            <li className="nav item m-0">
              <Link className="navbar-brand" to="/">
                <img src={require("../assets/img/ic_logo.png")} alt="logo" />
              </Link>
            </li>
            <li className="nav-item ml-0 pt-1">
              <form className="form-group es-form-search-main">
                <img src={Search} alt="seach" />
                <input
                  tabIndex="0"
                  className="form-control"
                  data-popover-content="#unique-id"
                  data-toggle="popover"
                  data-placement="bottom"
                  type="search"
                  placeholder="Kalit so’zni kiriting"
                  aria-label="Search"
                ></input>
              </form>
              {/* <div id="unique-id">
            <div className="popover-body">
              <div className="es-search-results">
                <div className="es-search-result">
                  <a href="#">
                    <img src={require("../assets/img/ic_newspaper.svg")} alt="newspaper" />ChatGPT-dan UI/UX dizayneri sifatida qanda y
                    foydalanaman
                  </a>
                </div>
                <div className="es-search-result">
                  <a href="#">
                    <img src={require("../assets/img/ic_newspaper.svg")} alt="newspaper" />ChatGPT-dan UI/UX dizayneri sifatida qanda y
                    foydalanaman
                  </a>
                </div>
                <div className="es-search-result">
                  <a href="#">
                    <img src={require("../assets/img/ic_newspaper.svg")} alt="newspaper" />ChatGPT-dan UI/UX dizayneri sifatida qanda y
                    foydalanaman
                  </a>
                </div>
              </div>
            </div>
          </div> */}
            </li>
          </ul>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {isWritePage && (
                  <button class="btn btn-success" type="button">
                    Chop etish
                  </button>
                )}
                {!isWritePage && (
                  <Link to={"/about"} className="nav-link">
                    Loyiha haqida
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {!isWritePage &&
                  (loggedIn ? (
                    <Link to={"/write"} className="nav-link">
                      Yozish
                    </Link>
                  ) : (
                    <button
                      className="nav-link"
                      type="button"
                      onClick={() => dispatch(showAuthSignInOptions())}
                    >
                      Yozish
                    </button>
                  ))}
              </li>
              {!loggedIn && (
                <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={() => dispatch(showAuthSignInOptions())}
                    data-toggle="modal"
                    data-target="#authModal"
                  >
                    Kirish
                  </button>
                </li>
              )}
              {loggedIn && (
                <li className="nav-item dropdown">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="es-btn-primary es-profile-dp"
                      type="button"
                      id="profileDropdown"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {userInfo?.user_img ? (
                        <img
                          // className="img-fluid"
                          width={50}
                          src={`${userInfo?.user_img}`}
                          alt="user"
                        />
                      ) : (
                        <span>{userInfo?.full_name?.[0]}</span>
                      )}
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="dropdown-menu es-dropdown-pr"
                      aria-labelledby="profileDropdown"
                    >
                      <Dropdown.Item className="dropdown-item">
                        <Link to={"/profile-edit"}>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.00065 7.00004C8.84232 7.00004 10.334 5.50837 10.334 3.66671C10.334 1.82504 8.84232 0.333374 7.00065 0.333374C5.15898 0.333374 3.66732 1.82504 3.66732 3.66671C3.66732 5.50837 5.15898 7.00004 7.00065 7.00004ZM7.00065 8.66671C4.77565 8.66671 0.333984 9.78337 0.333984 12V12.8334C0.333984 13.2917 0.708984 13.6667 1.16732 13.6667H12.834C13.2923 13.6667 13.6673 13.2917 13.6673 12.8334V12C13.6673 9.78337 9.22565 8.66671 7.00065 8.66671Z"
                              fill="#969696"
                            />
                          </svg>
                          Profil sozlamalari
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <Link to={"/saved"}>
                          <svg
                            width="12"
                            height="16"
                            viewBox="0 0 12 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.166 0.5H1.83268C0.916016 0.5 0.166016 1.25 0.166016 2.16667V15.5L5.99935 13L11.8327 15.5V2.16667C11.8327 1.25 11.0827 0.5 10.166 0.5Z"
                              fill="#969696"
                            />
                          </svg>
                          Saqlanganlar
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <Link to={"/user-articles"}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.5 12.55V15.0833C0.5 15.3167 0.683333 15.5 0.916667 15.5H3.45C3.55833 15.5 3.66667 15.4583 3.74167 15.375L12.8417 6.28334L9.71667 3.15834L0.625 12.25C0.541667 12.3333 0.5 12.4333 0.5 12.55ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z"
                              fill="#969696"
                            />
                          </svg>
                          Maqolalarim
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <Link to={"/"}>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.33268 3.66663H1.49935C2.14102 3.66663 2.66602 4.19163 2.66602 4.83329V10.6666C2.66602 11.3083 2.14102 11.8333 1.49935 11.8333H1.33268C0.691016 11.8333 0.166016 11.3083 0.166016 10.6666V4.83329C0.166016 4.19163 0.691016 3.66663 1.33268 3.66663ZM5.99935 0.166626C6.64102 0.166626 7.16602 0.691626 7.16602 1.33329V10.6666C7.16602 11.3083 6.64102 11.8333 5.99935 11.8333C5.35768 11.8333 4.83268 11.3083 4.83268 10.6666V1.33329C4.83268 0.691626 5.35768 0.166626 5.99935 0.166626ZM10.666 6.83329C11.3077 6.83329 11.8327 7.35829 11.8327 7.99996V10.6666C11.8327 11.3083 11.3077 11.8333 10.666 11.8333C10.0243 11.8333 9.49935 11.3083 9.49935 10.6666V7.99996C9.49935 7.35829 10.0243 6.83329 10.666 6.83329Z"
                              fill="#969696"
                            />
                          </svg>
                          Statistika
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        type="button"
                        onClick={logOutHandler}
                      >
                        <img className="es-logout-img" src={LogOut} />
                        Chiqish
                        <p className="es-dropdown-logout-email">
                          {userInfo?.email}
                        </p>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              )}
              {!loggedIn && (
                <li className="nav-item">
                  <button
                    className="btn es-btn-primary"
                    data-toggle="modal"
                    onClick={() => dispatch(showAuthSignUpOptions())}
                  >
                    Boshlash
                  </button>
                </li>
              )}
            </ul>
          </div>
          <div className="es-mobile-nav">
            <Link
              className="nav-link es-mobile-search-link"
              to={"/mobile-search"}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_389_2081)">
                  <mask
                    id="mask0_389_2081"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <path d="M24 0H0V24H24V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_389_2081)">
                    <path
                      d="M21 21L16.6569 16.6569M16.6569 16.6569C18.1046 15.2091 19 13.2091 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C13.2091 19 15.2091 18.1046 16.6569 16.6569Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_389_2081">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            {loggedIn && (
              <Dropdown>
                <Dropdown.Toggle
                  className="btn es-btn-primary es-profile-dp"
                  type="button"
                  id="profileDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {userInfo?.user_img ? (
                    <img
                      // className="img-fluid"
                      width={50}
                      src={`${userInfo?.user_img}`}
                      alt="user"
                    />
                  ) : (
                    <span>{userInfo?.full_name?.[0]}</span>
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="dropdown-menu es-dropdown-pr"
                  aria-labelledby="profileDropdown"
                >
                  <Dropdown.Item className="dropdown-item">
                    <Link to={"/profile-edit"}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.00065 7.00004C8.84232 7.00004 10.334 5.50837 10.334 3.66671C10.334 1.82504 8.84232 0.333374 7.00065 0.333374C5.15898 0.333374 3.66732 1.82504 3.66732 3.66671C3.66732 5.50837 5.15898 7.00004 7.00065 7.00004ZM7.00065 8.66671C4.77565 8.66671 0.333984 9.78337 0.333984 12V12.8334C0.333984 13.2917 0.708984 13.6667 1.16732 13.6667H12.834C13.2923 13.6667 13.6673 13.2917 13.6673 12.8334V12C13.6673 9.78337 9.22565 8.66671 7.00065 8.66671Z"
                          fill="#969696"
                        />
                      </svg>
                      Profil sozlamalari
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item">
                    <Link to={"/saved"}>
                      <svg
                        width="12"
                        height="16"
                        viewBox="0 0 12 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.166 0.5H1.83268C0.916016 0.5 0.166016 1.25 0.166016 2.16667V15.5L5.99935 13L11.8327 15.5V2.16667C11.8327 1.25 11.0827 0.5 10.166 0.5Z"
                          fill="#969696"
                        />
                      </svg>
                      Saqlanganlar
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item">
                    <Link to={"/user-articles"}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.5 12.55V15.0833C0.5 15.3167 0.683333 15.5 0.916667 15.5H3.45C3.55833 15.5 3.66667 15.4583 3.74167 15.375L12.8417 6.28334L9.71667 3.15834L0.625 12.25C0.541667 12.3333 0.5 12.4333 0.5 12.55ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z"
                          fill="#969696"
                        />
                      </svg>
                      Maqolalarim
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item">
                    <Link to={"/"}>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.33268 3.66663H1.49935C2.14102 3.66663 2.66602 4.19163 2.66602 4.83329V10.6666C2.66602 11.3083 2.14102 11.8333 1.49935 11.8333H1.33268C0.691016 11.8333 0.166016 11.3083 0.166016 10.6666V4.83329C0.166016 4.19163 0.691016 3.66663 1.33268 3.66663ZM5.99935 0.166626C6.64102 0.166626 7.16602 0.691626 7.16602 1.33329V10.6666C7.16602 11.3083 6.64102 11.8333 5.99935 11.8333C5.35768 11.8333 4.83268 11.3083 4.83268 10.6666V1.33329C4.83268 0.691626 5.35768 0.166626 5.99935 0.166626ZM10.666 6.83329C11.3077 6.83329 11.8327 7.35829 11.8327 7.99996V10.6666C11.8327 11.3083 11.3077 11.8333 10.666 11.8333C10.0243 11.8333 9.49935 11.3083 9.49935 10.6666V7.99996C9.49935 7.35829 10.0243 6.83329 10.666 6.83329Z"
                          fill="#969696"
                        />
                      </svg>
                      Statistika
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item"
                    type="button"
                    onClick={logOutHandler}
                  >
                    <img className="es-logout-img" src={LogOut} />
                    Chiqish
                    <p className="es-dropdown-logout-email">
                      {userInfo?.email}
                    </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
            {!loggedIn && (
              <button
                className="es-mm-btn es-btn-primary btn"
                data-toggle="modal"
                onClick={() => dispatch(showAuthSignInOptions())}
              >
                Kirish
              </button>
            )}
            <button
              className="btn nav-link es-menu-btn"
              onClick={() => dispatch(showMenuModal())}
            >
              <img src={MenuModal} alt="menu" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
