import Search from "../assets/img/ic_search.svg";

const Navbar = () => {
  return (
    <header class="es-main-navbar">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <ul class="navbar-nav">
            <li class="nav item m-0">
              <a class="navbar-brand" href="#">
                <img src={require("../assets/img/ic_logo.png")} alt="logo" />
              </a>
            </li>
            <li class="nav-item ml-0 pt-1">
              <form class="form-group es-form-search-main">
                <img src={Search} alt="seach" />
                <input
                  tabindex="0"
                  class="form-control"
                  data-popover-content="#unique-id"
                  data-toggle="popover"
                  data-placement="bottom"
                  type="search"
                  placeholder="Kalit so’zni kiriting"
                  aria-label="Search"
                ></input>
              </form>
              {/* <div id="unique-id">
            <div class="popover-body">
              <div class="es-search-results">
                <div class="es-search-result">
                  <a href="#">
                    <img src={require("../assets/img/ic_newspaper.svg")} alt="newspaper" />ChatGPT-dan UI/UX dizayneri sifatida qanda y
                    foydalanaman
                  </a>
                </div>
                <div class="es-search-result">
                  <a href="#">
                    <img src={require("../assets/img/ic_newspaper.svg")} alt="newspaper" />ChatGPT-dan UI/UX dizayneri sifatida qanda y
                    foydalanaman
                  </a>
                </div>
                <div class="es-search-result">
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
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_389_2081)">
                  <mask id="mask0_389_2081" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0"
                    width="24" height="24">
                    <path d="M24 0H0V24H24V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_389_2081)">
                    <path
                      d="M21 21L16.6569 16.6569M16.6569 16.6569C18.1046 15.2091 19 13.2091 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C13.2091 19 15.2091 18.1046 16.6569 16.6569Z"
                      stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_389_2081">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg> */}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Loyiha haqida</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Yozish
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  type="button"
                  data-toggle="modal"
                  data-target="#authModal"
                >
                  Kirish
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="btn es-btn-primary es-profile-dp"
                  type="button"
                  id="profileDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ak
                </a>
                <div
                  class="dropdown-menu es-dropdown-pr"
                  aria-labelledby="profileDropdown"
                >
                  <a class="dropdown-item" href="#">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.00065 7.00004C8.84232 7.00004 10.334 5.50837 10.334 3.66671C10.334 1.82504 8.84232 0.333374 7.00065 0.333374C5.15898 0.333374 3.66732 1.82504 3.66732 3.66671C3.66732 5.50837 5.15898 7.00004 7.00065 7.00004ZM7.00065 8.66671C4.77565 8.66671 0.333984 9.78337 0.333984 12V12.8334C0.333984 13.2917 0.708984 13.6667 1.16732 13.6667H12.834C13.2923 13.6667 13.6673 13.2917 13.6673 12.8334V12C13.6673 9.78337 9.22565 8.66671 7.00065 8.66671Z"
                        fill="#969696"
                      />
                    </svg>
                    Profil sozlamalari
                  </a>
                  <a class="dropdown-item" href="#">
                    <svg
                      width="12"
                      height="16"
                      viewBox="0 0 12 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.166 0.5H1.83268C0.916016 0.5 0.166016 1.25 0.166016 2.16667V15.5L5.99935 13L11.8327 15.5V2.16667C11.8327 1.25 11.0827 0.5 10.166 0.5Z"
                        fill="#969696"
                      />
                    </svg>
                    Saqlanganlar
                  </a>
                  <a class="dropdown-item" href="#">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.5 12.55V15.0833C0.5 15.3167 0.683333 15.5 0.916667 15.5H3.45C3.55833 15.5 3.66667 15.4583 3.74167 15.375L12.8417 6.28334L9.71667 3.15834L0.625 12.25C0.541667 12.3333 0.5 12.4333 0.5 12.55ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z"
                        fill="#969696"
                      />
                    </svg>
                    Maqolalarim
                  </a>
                  <a class="dropdown-item" href="#">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.33268 3.66663H1.49935C2.14102 3.66663 2.66602 4.19163 2.66602 4.83329V10.6666C2.66602 11.3083 2.14102 11.8333 1.49935 11.8333H1.33268C0.691016 11.8333 0.166016 11.3083 0.166016 10.6666V4.83329C0.166016 4.19163 0.691016 3.66663 1.33268 3.66663ZM5.99935 0.166626C6.64102 0.166626 7.16602 0.691626 7.16602 1.33329V10.6666C7.16602 11.3083 6.64102 11.8333 5.99935 11.8333C5.35768 11.8333 4.83268 11.3083 4.83268 10.6666V1.33329C4.83268 0.691626 5.35768 0.166626 5.99935 0.166626ZM10.666 6.83329C11.3077 6.83329 11.8327 7.35829 11.8327 7.99996V10.6666C11.8327 11.3083 11.3077 11.8333 10.666 11.8333C10.0243 11.8333 9.49935 11.3083 9.49935 10.6666V7.99996C9.49935 7.35829 10.0243 6.83329 10.666 6.83329Z"
                        fill="#969696"
                      />
                    </svg>
                    Statistika
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a
                  class="btn es-btn-primary"
                  href="#"
                  type="button"
                  data-toggle="modal"
                  data-target="#codeModal"
                >
                  Boshlash
                </a>
              </li>
            </ul>
          </div>
          <div class="es-mobile-nav">
            <button
              class="btn nav-link"
              data-target="#menuModal"
              data-toggle="modal"
            >
              <img src={require("../assets/img/ic_mob_menu.svg")} alt="" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
