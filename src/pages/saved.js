import React from "react";
import Time from "../assets/img/ic_time.svg";
import Seen from "../assets/img/ic_seen.svg";

const Saved = () => {
  return (
    <main>
      <section className="es-article-header es-regular-section">
        <div className="es-av-header">
          <div className="container">
            <div className="es-av-title">Saqlangan maqolalar</div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Search
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="es-regular-section">
        <div className="container">
          <ul
            className="nav nav-pills es-saved-last-tab"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item mr-2" role="presentation">
              <a
                className="nav-link active"
                id="pills-saved-tab"
                data-toggle="pill"
                href="#pills-saved"
                role="tab"
                aria-controls="pills-saved"
                aria-selected="true"
              >
                Saqlanganlar
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-last-tab"
                data-toggle="pill"
                href="#pills-last"
                role="tab"
                aria-controls="pills-last"
                aria-selected="false"
              >
                Oxirgi o’qilganlar
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-saved"
              role="tabpanel"
              aria-labelledby="pills-saved-tab"
            >
              <div className="es-article-list">
                <div className="es-article-item">
                  <div className="es-article-img">
                    <a href="#">
                      <img
                        src={require("../assets/img/banner_profile.jpg")}
                        alt="article"
                      />
                    </a>
                  </div>
                  <div className="es-article-content">
                    <div className="es-article-type">
                      {" "}
                      <a href="#">vizual dizayn</a> <span>17 Sep 2023</span>{" "}
                    </div>
                    <a href="#" className="es-article-title">
                      ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                    </a>
                    <a href="#" className="es-article-info">
                      Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani
                      yozishni boshlaganimda, men har qanday kontekstda dunyo
                      e'tiborini tortgan va qiziqish uyg'otgan texnologik
                      mo'jiza haqida yolg'iz qoldirish tavsiya etilmaydigan
                      fikrni shakllantirish uchun mish-mishlarga qanchalik
                      tayanganimni tushundim. va teng darajada tashvish.
                    </a>
                    <div className="es-article-footer">
                      <div className="es-article-content-inner">
                        <a href="#" className="es-article-writer">
                          <img
                            className="img-fluid"
                            src={require("../assets/img/banner_profile.jpg")}
                            alt="profile"
                          />
                          Akbarali Khasanov
                        </a>
                        <button className="btn es-btn-light es-btn-save xl-hide">
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
                          Keyinroq o‘qish
                        </button>
                      </div>
                      <div className="es-article-content-inner">
                        <button className="btn es-btn-light es-btn-save sm-hide">
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
                          Keyinroq o‘qish
                        </button>
                        <div className="es-article-r-hour">
                          <img src={Time} alt="time" /> 3 daqiqa o‘qis h
                        </div>
                        <button
                          className="btn es-article-chat-modal"
                          data-target="#commentModal"
                          data-toggle="modal"
                        >
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
                              d="M12.334 2.99999H11.6673V8.33333C11.6673 8.7 11.3673 9 11.0007 9H3.00065V9.66666C3.00065 10.4 3.60065 11 4.33398 11H11.0007L13.6673 13.6667V4.33333C13.6673 3.59999 13.0673 2.99999 12.334 2.99999ZM10.334 6.33333V1.66666C10.334 0.933328 9.73398 0.333328 9.00065 0.333328H1.66732C0.933984 0.333328 0.333984 0.933328 0.333984 1.66666V10.3333L3.00065 7.66666H9.00065C9.73398 7.66666 10.334 7.06666 10.334 6.33333Z"
                              fill="#969696"
                            />
                          </svg>
                          34
                        </button>
                        <div className="es-article-seen">
                          <img src={Seen} alt="seen" />
                          8.6 K
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-last"
              role="tabpanel"
              aria-labelledby="pills-last-tab"
            >
              <div className="es-article-list">
                <div className="es-article-item">
                  <div className="es-article-img">
                    <a href="#">
                      <img
                        src={require("../assets/img/banner_profile.jpg")}
                        alt="article"
                      />
                    </a>
                  </div>
                  <div className="es-article-content">
                    <div className="es-article-type">
                      {" "}
                      <a href="#">vizual dizayn</a> <span>17 Sep 2023</span>{" "}
                    </div>
                    <a href="#" className="es-article-title">
                      ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                    </a>
                    <a href="#" className="es-article-info">
                      Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani
                      yozishni boshlaganimda, men har qanday kontekstda dunyo
                      e'tiborini tortgan va qiziqish uyg'otgan texnologik
                      mo'jiza haqida yolg'iz qoldirish tavsiya etilmaydigan
                      fikrni shakllantirish uchun mish-mishlarga qanchalik
                      tayanganimni tushundim. va teng darajada tashvish.
                    </a>
                    <div className="es-article-footer">
                      <div className="es-article-content-inner">
                        <a href="#" className="es-article-writer">
                          <img
                            className="img-fluid"
                            src={require("../assets/img/banner_profile.jpg")}
                            alt="profile"
                          />
                          Akbarali Khasanov
                        </a>
                        <button className="btn es-btn-light es-btn-save xl-hide">
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
                          Keyinroq o‘qish
                        </button>
                      </div>
                      <div className="es-article-content-inner">
                        <button className="btn es-btn-light es-btn-save sm-hide">
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
                          Keyinroq o‘qish
                        </button>
                        <div className="es-article-r-hour">
                          <img src={Time} alt="time" /> 3 daqiqa o‘qis h
                        </div>
                        <button
                          className="btn es-article-chat-modal"
                          data-target="#commentModal"
                          data-toggle="modal"
                        >
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
                              d="M12.334 2.99999H11.6673V8.33333C11.6673 8.7 11.3673 9 11.0007 9H3.00065V9.66666C3.00065 10.4 3.60065 11 4.33398 11H11.0007L13.6673 13.6667V4.33333C13.6673 3.59999 13.0673 2.99999 12.334 2.99999ZM10.334 6.33333V1.66666C10.334 0.933328 9.73398 0.333328 9.00065 0.333328H1.66732C0.933984 0.333328 0.333984 0.933328 0.333984 1.66666V10.3333L3.00065 7.66666H9.00065C9.73398 7.66666 10.334 7.06666 10.334 6.33333Z"
                              fill="#969696"
                            />
                          </svg>
                          34
                        </button>
                        <div className="es-article-seen">
                          <img src={Seen} alt="seen" />
                          8.6 K
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Saved;
