import { useDispatch, useSelector } from "react-redux";
import Search from "../assets/img/ic_search.svg";
import MenuModal from "../assets/img/ic_mob_menu.svg";
import LogOut from "../assets/img/ic_logout.svg";
import {
  showAuthSignIn,
  showAuthSignInOptions,
  showAuthSignUp,
  showAuthSignUpOptions,
} from "../store/actions/modalAction";
import { logIn, logOut } from "../store/actions/loginAction";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setTitleAndSubtitle } from "../store/actions/writtenDraftAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.loginReducer);
  const { userInfo } = useSelector((state) => state.userInfoReducer);
  const navigate = useNavigate();
  const { title, sub_title } = useSelector(
    (state) => state.writtenDraftReducer
  );
  const { pathname } = useLocation();
  const isWritePage = pathname === "/write";

  const logOutHandler = () => {
    dispatch(logOut());
  };

  const handlePublishDraft = () => {
    console.log("Publish!");
    dispatch(setTitleAndSubtitle());
    if (title && sub_title) {
      setTimeout(() => {
        navigate("/write-form", { replace: true });
      }, 300);
    }
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
            </li>
          </ul>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {isWritePage && (
                  <button
                    onClick={handlePublishDraft}
                    class="btn btn-success"
                    type="button"
                  >
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
                  <Dropdown className="es-profile-dd">
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
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                          </svg>
                          Profil sozlamalari
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <Link to={"/saved"}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
                          </svg>
                          Saqlanganlar
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <Link to={"/user-articles"}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
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
                              fill="#000000"
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
            {isWritePage && (
              <div className="d-flex align-items-center me-3">
                <button
                  onClick={handlePublishDraft}
                  class="btn btn-success btn-sm rounded"
                  type="button"
                >
                  Chop etish
                </button>
              </div>
            )}
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
            {!loggedIn && (
              <Link className="nav-link">
                <button
                  className="nav-link btn es-btn-primary ms-4"
                  onClick={() => dispatch(showAuthSignInOptions())}
                >
                  Kirish
                </button>
              </Link>
            )}
            {loggedIn && (
              <Dropdown className="es-profile-dd">
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
                  <Dropdown.Item className="dropdown-item es-write-dd-item">
                    <Link to={"/write"}>
                      <svg
                        className="es-logout-img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                      </svg>
                      Yozish
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item">
                    <Link to={"/profile-edit"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                      </svg>
                      Profil sozlamalari
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item">
                    <Link to={"/saved"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
                      </svg>
                      Saqlanganlar
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item">
                    <Link to={"/user-articles"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
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
                          fill="#000000"
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
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
