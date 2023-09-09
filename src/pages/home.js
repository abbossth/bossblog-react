import More from "../assets/img/ic_more_t.svg";
import Vector from "../assets/img/ic_vector.svg";
import VectorS from "../assets/img/ic_vector.svg";
import TwoLine from "../assets/img/ic_two_line.svg";
import MoreLine from "../assets/img/ic_more_line.svg";
import Profile from "../assets/img/ic_profile.svg";
import Time from "../assets/img/ic_time.svg";
import Seen from "../assets/img/ic_seen.svg";

const Home = () => {
  return (
    <main>
      <section class="es-regular-section es-main-section">
        <div class="container">
          <div class="es-main-section-content">
            <h1 class="es-main-section-title">
              Bizning maqsadimiz oʻzbek ilmiy kontentini boyitish
            </h1>
            <p class="es-main-section-desc">
              Bilimingizni maqolalarda ulashing va hamjamiyatni kengaytiring
            </p>
            <a href="#" class="btn es-btn-primary" type="button">
              Hamjamiyatga qo’shiling
            </a>
            <div class="es-main-section-links">
              <a href="#">#dolzarb</a>
              <a href="#">#ta’lim</a>
              <a href="#">#iqtisodiyot</a>
              <a href="#">#madaniyat</a>
              <a href="#">#texnologiya</a>
              <a href="#">#san’at</a>
            </div>
            <a href="#" class="es-main-section-more">
              ko‘proq mavzularni ko‘rish
              <img src={More} alt="more" />
            </a>
          </div>
        </div>
      </section>
      <section class="es-regular-section">
        <div class="container">
          <div class="es-section-header">
            <div class="es-section-title">
              Mashxur maqolalar
              <img src={VectorS} alt="vector" />
            </div>
            <a href="#" class="btn es-btn-light" type="button">
              Barchasi
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.99917 0.99998C3.99917 1.37331 4.29917 1.66665 4.66583 1.66665H8.3925L1.1325 8.92665C0.8725 9.18665 0.8725 9.60665 1.1325 9.86665C1.3925 10.1266 1.8125 10.1266 2.0725 9.86665L9.3325 2.60665V6.33331C9.3325 6.69998 9.6325 6.99998 9.99917 6.99998C10.3658 6.99998 10.6658 6.69998 10.6658 6.33331V0.99998C10.6658 0.633313 10.3658 0.333313 9.99917 0.333313H4.66583C4.29917 0.333313 3.99917 0.633313 3.99917 0.99998Z"
                  fill="#969696"
                />
              </svg>
            </a>
          </div>
          <div class="es-popular-ar-list">
            <div class="es-popular-ar-item">
              <div class="es-popular-ar-wrp">
                <div class="es-popular-ar-img">
                  <a href="#">
                    <img
                      src={require("../assets/img/article_1.jpg")}
                      alt="article"
                    />
                  </a>
                </div>
                <div class="es-popular-ar-content">
                  <p class="es-popular-ar-date">
                    17 Sep 2023{" "}
                    <span class="es-popular-ar-by">Alexander Brown</span>
                  </p>
                  <a href="#" class="es-popular-ar-title">
                    ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                  </a>
                </div>
              </div>
            </div>
            <div class="es-popular-ar-item">
              <div class="es-popular-ar-wrp">
                <div class="es-popular-ar-img">
                  <a href="#">
                    <img
                      src={require("../assets/img/article_1.jpg")}
                      alt="article"
                    />
                  </a>
                </div>
                <div class="es-popular-ar-content">
                  <p class="es-popular-ar-date">
                    17 Sep 2023{" "}
                    <span class="es-popular-ar-by">Alexander Brown</span>
                  </p>
                  <a href="#" class="es-popular-ar-title">
                    ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                  </a>
                </div>
              </div>
            </div>
            <div class="es-popular-ar-item">
              <div class="es-popular-ar-wrp">
                <div class="es-popular-ar-img">
                  <a href="#">
                    <img
                      src={require("../assets/img/article_1.jpg")}
                      alt="article"
                    />
                  </a>
                </div>
                <div class="es-popular-ar-content">
                  <p class="es-popular-ar-date">
                    17 Sep 2023{" "}
                    <span class="es-popular-ar-by">Alexander Brown</span>
                  </p>
                  <a href="#" class="es-popular-ar-title">
                    ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                  </a>
                </div>
              </div>
            </div>
            <div class="es-popular-ar-item">
              <div class="es-popular-ar-wrp">
                <div class="es-popular-ar-img">
                  <a href="#">
                    <img
                      src={require("../assets/img/article_1.jpg")}
                      alt="article"
                    />
                  </a>
                </div>
                <div class="es-popular-ar-content">
                  <p class="es-popular-ar-date">
                    17 Sep 2023{" "}
                    <span class="es-popular-ar-by">Alexander Brown</span>
                  </p>
                  <a href="#" class="es-popular-ar-title">
                    ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                  </a>
                </div>
              </div>
            </div>
            <div class="es-popular-ar-item">
              <div class="es-popular-ar-wrp">
                <div class="es-popular-ar-img">
                  <a href="#">
                    <img
                      src={require("../assets/img/article_1.jpg")}
                      alt="article"
                    />
                  </a>
                </div>
                <div class="es-popular-ar-content">
                  <p class="es-popular-ar-date">
                    17 Sep 2023{" "}
                    <span class="es-popular-ar-by">Alexander Brown</span>
                  </p>
                  <a href="#" class="es-popular-ar-title">
                    ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                  </a>
                </div>
              </div>
            </div>
            <div class="es-popular-ar-item">
              <div class="es-popular-ar-wrp">
                <div class="es-popular-ar-img">
                  <a href="#">
                    <img
                      src={require("../assets/img/article_1.jpg")}
                      alt="article"
                    />
                  </a>
                </div>
                <div class="es-popular-ar-content">
                  <p class="es-popular-ar-date">
                    17 Sep 2023{" "}
                    <span class="es-popular-ar-by">Alexander Brown</span>
                  </p>
                  <a href="#" class="es-popular-ar-title">
                    ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="es-regular-section">
        <div class="container">
          <div class="es-section-header">
            <div class="es-section-title">
              Yangi maqolalar
              <img src={Vector} alt="vector" />
            </div>
            <div class="d-flex">
              <div class="input-group es-input-select">
                <select class="custom-select" id="SelectArticle">
                  <option selected>Barcha maqolalar</option>
                  <option value="1">Mashhur maqolalar</option>
                  <option value="2">Ko'p o'qilgan</option>
                </select>
              </div>
              <ul
                class="nav nav-pills es-nav-pills"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="pills-two-tab"
                    data-toggle="pill"
                    href="#pills-two"
                    role="tab"
                    aria-controls="pills-two"
                    aria-selected="true"
                  >
                    <img src={TwoLine} alt="two" />
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="pills-more-tab"
                    data-toggle="pill"
                    href="#pills-more"
                    role="tab"
                    aria-controls="pills-more"
                    aria-selected="false"
                  >
                    <img src={MoreLine} alt="more" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-two"
              role="tabpanel"
              aria-labelledby="pills-two-tab"
            >
              <div class="es-tab-pane-main">
                <div class="es-article-list">
                  <div class="es-article-item">
                    <div class="es-article-img">
                      <a href="#">
                        <img
                          src={require("../assets/img/article_2.jpg")}
                          alt="article"
                        />
                      </a>
                    </div>
                    <div class="es-article-content">
                      <div class="es-article-type">
                        vizual dizayn <span>17 Sep 2023</span>{" "}
                      </div>
                      <a href="#" class="es-article-title">
                        ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                      </a>
                      <a href="#" class="es-article-info">
                        Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani
                        yozishni boshlaganimda, men har qanday kontekstda dunyo
                        e'tiborini tortgan va qiziqish uyg'otgan texnologik
                        mo'jiza haqida yolg'iz qoldirish tavsiya etilmaydigan
                        fikrni shakllantirish uchun mish-mishlarga qanchalik
                        tayanganimni tushundim. va teng darajada tashvish.
                      </a>
                      <div class="es-article-footer">
                        <div class="es-article-content-inner">
                          <a href="#" class="es-article-writer">
                            <img
                              class="img-fluid"
                              src={Profile}
                              alt="profile"
                            />
                            Akbarali Khasanov
                          </a>
                          <button class="btn es-btn-light es-btn-save xl-hide">
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
                            Keyinroq o‘qish
                          </button>
                        </div>
                        <div class="es-article-content-inner">
                          <button class="btn es-btn-light es-btn-save sm-hide">
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
                            Keyinroq o‘qish
                          </button>
                          <div class="es-article-r-hour">
                            <img src={Time} alt="time" /> 3 daqiqa o‘qis h
                          </div>
                          <button
                            class="btn es-article-chat-modal"
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
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.334 2.99999H11.6673V8.33333C11.6673 8.7 11.3673 9 11.0007 9H3.00065V9.66666C3.00065 10.4 3.60065 11 4.33398 11H11.0007L13.6673 13.6667V4.33333C13.6673 3.59999 13.0673 2.99999 12.334 2.99999ZM10.334 6.33333V1.66666C10.334 0.933328 9.73398 0.333328 9.00065 0.333328H1.66732C0.933984 0.333328 0.333984 0.933328 0.333984 1.66666V10.3333L3.00065 7.66666H9.00065C9.73398 7.66666 10.334 7.06666 10.334 6.33333Z"
                                fill="#969696"
                              />
                            </svg>
                            34
                          </button>
                          <div class="es-article-seen">
                            <img src={Seen} alt="seen" />
                            8.6 K
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="es-article-item">
                    <div class="es-article-img">
                      <a href="#">
                        <img
                          src={require("../assets/img/article_2.jpg")}
                          alt="article"
                        />
                      </a>
                    </div>
                    <div class="es-article-content">
                      <div class="es-article-type">
                        vizual dizayn <span>17 Sep 2023</span>{" "}
                      </div>
                      <a href="#" class="es-article-title">
                        ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                      </a>
                      <a href="#" class="es-article-info">
                        Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani
                        yozishni boshlaganimda, men har qanday kontekstda dunyo
                        e'tiborini tortgan va qiziqish uyg'otgan texnologik
                        mo'jiza haqida yolg'iz qoldirish tavsiya etilmaydigan
                        fikrni shakllantirish uchun mish-mishlarga qanchalik
                        tayanganimni tushundim. va teng darajada tashvish.
                      </a>
                      <div class="es-article-footer">
                        <div class="es-article-content-inner">
                          <a href="#" class="es-article-writer">
                            <img
                              class="img-fluid"
                              src={Profile}
                              alt="profile"
                            />
                            Akbarali Khasanov
                          </a>
                          <button class="btn es-btn-light es-btn-save xl-hide">
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
                            Keyinroq o‘qish
                          </button>
                        </div>
                        <div class="es-article-content-inner">
                          <button class="btn es-btn-light es-btn-save sm-hide">
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
                            Keyinroq o‘qish
                          </button>
                          <div class="es-article-r-hour">
                            <img src={Time} alt="time" /> 3 daqiqa o‘qis h
                          </div>
                          <button
                            class="btn es-article-chat-modal"
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
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.334 2.99999H11.6673V8.33333C11.6673 8.7 11.3673 9 11.0007 9H3.00065V9.66666C3.00065 10.4 3.60065 11 4.33398 11H11.0007L13.6673 13.6667V4.33333C13.6673 3.59999 13.0673 2.99999 12.334 2.99999ZM10.334 6.33333V1.66666C10.334 0.933328 9.73398 0.333328 9.00065 0.333328H1.66732C0.933984 0.333328 0.333984 0.933328 0.333984 1.66666V10.3333L3.00065 7.66666H9.00065C9.73398 7.66666 10.334 7.06666 10.334 6.33333Z"
                                fill="#969696"
                              />
                            </svg>
                            34
                          </button>
                          <div class="es-article-seen">
                            <img src={Seen} alt="seen" />
                            8.6 K
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="es-article-item">
                    <div class="es-article-img">
                      <a href="#">
                        <img
                          src={require("../assets/img/article_2.jpg")}
                          alt="article"
                        />
                      </a>
                    </div>
                    <div class="es-article-content">
                      <div class="es-article-type">
                        vizual dizayn <span>17 Sep 2023</span>{" "}
                      </div>
                      <a href="#" class="es-article-title">
                        ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                      </a>
                      <a href="#" class="es-article-info">
                        Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani
                        yozishni boshlaganimda, men har qanday kontekstda dunyo
                        e'tiborini tortgan va qiziqish uyg'otgan texnologik
                        mo'jiza haqida yolg'iz qoldirish tavsiya etilmaydigan
                        fikrni shakllantirish uchun mish-mishlarga qanchalik
                        tayanganimni tushundim. va teng darajada tashvish.
                      </a>
                      <div class="es-article-footer">
                        <div class="es-article-content-inner">
                          <a href="#" class="es-article-writer">
                            <img
                              class="img-fluid"
                              src={Profile}
                              alt="profile"
                            />
                            Akbarali Khasanov
                          </a>
                          <button class="btn es-btn-light es-btn-save xl-hide">
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
                            Keyinroq o‘qish
                          </button>
                        </div>
                        <div class="es-article-content-inner">
                          <button class="btn es-btn-light es-btn-save sm-hide">
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
                            Keyinroq o‘qish
                          </button>
                          <div class="es-article-r-hour">
                            <img src={Time} alt="time" /> 3 daqiqa o‘qis h
                          </div>
                          <button
                            class="btn es-article-chat-modal"
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
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.334 2.99999H11.6673V8.33333C11.6673 8.7 11.3673 9 11.0007 9H3.00065V9.66666C3.00065 10.4 3.60065 11 4.33398 11H11.0007L13.6673 13.6667V4.33333C13.6673 3.59999 13.0673 2.99999 12.334 2.99999ZM10.334 6.33333V1.66666C10.334 0.933328 9.73398 0.333328 9.00065 0.333328H1.66732C0.933984 0.333328 0.333984 0.933328 0.333984 1.66666V10.3333L3.00065 7.66666H9.00065C9.73398 7.66666 10.334 7.06666 10.334 6.33333Z"
                                fill="#969696"
                              />
                            </svg>
                            34
                          </button>
                          <div class="es-article-seen">
                            <img src={Seen} alt="seen" />
                            8.6 K
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="es-article-item">
                    <div class="es-article-img">
                      <a href="#">
                        <img
                          src={require("../assets/img/article_2.jpg")}
                          alt="article"
                        />
                      </a>
                    </div>
                    <div class="es-article-content">
                      <div class="es-article-type">
                        vizual dizayn <span>17 Sep 2023</span>{" "}
                      </div>
                      <a href="#" class="es-article-title">
                        ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                      </a>
                      <a href="#" class="es-article-info">
                        Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani
                        yozishni boshlaganimda, men har qanday kontekstda dunyo
                        e'tiborini tortgan va qiziqish uyg'otgan texnologik
                        mo'jiza haqida yolg'iz qoldirish tavsiya etilmaydigan
                        fikrni shakllantirish uchun mish-mishlarga qanchalik
                        tayanganimni tushundim. va teng darajada tashvish.
                      </a>
                      <div class="es-article-footer">
                        <div class="es-article-content-inner">
                          <a href="#" class="es-article-writer">
                            <img
                              class="img-fluid"
                              src={Profile}
                              alt="profile"
                            />
                            Akbarali Khasanov
                          </a>
                          <button class="btn es-btn-light es-btn-save xl-hide">
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
                            Keyinroq o‘qish
                          </button>
                        </div>
                        <div class="es-article-content-inner">
                          <button class="btn es-btn-light es-btn-save sm-hide">
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
                            Keyinroq o‘qish
                          </button>
                          <div class="es-article-r-hour">
                            <img src={Time} alt="time" /> 3 daqiqa o‘qis h
                          </div>
                          <button
                            class="btn es-article-chat-modal"
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
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.334 2.99999H11.6673V8.33333C11.6673 8.7 11.3673 9 11.0007 9H3.00065V9.66666C3.00065 10.4 3.60065 11 4.33398 11H11.0007L13.6673 13.6667V4.33333C13.6673 3.59999 13.0673 2.99999 12.334 2.99999ZM10.334 6.33333V1.66666C10.334 0.933328 9.73398 0.333328 9.00065 0.333328H1.66732C0.933984 0.333328 0.333984 0.933328 0.333984 1.66666V10.3333L3.00065 7.66666H9.00065C9.73398 7.66666 10.334 7.06666 10.334 6.33333Z"
                                fill="#969696"
                              />
                            </svg>
                            34
                          </button>
                          <div class="es-article-seen">
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
            <div
              class="tab-pane fade"
              id="pills-more"
              role="tabpanel"
              aria-labelledby="pills-more-tab"
            >
              <div class="es-search-list">
                <div class="es-search-item">
                  <div class="es-article-img">
                    <a href="#">
                      <img
                        src="img/search.jpg"
                        class="img-fluid"
                        alt="article"
                      />
                    </a>
                  </div>
                  <div class="es-article-content">
                    <div class="es-article-type">
                      vizual dizayn <span>17 Sep 2023</span>{" "}
                    </div>
                    <a href="#" class="es-article-title">
                      ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                    </a>
                    <a href="#" class="es-article-info">
                      Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani
                      yozishni boshlaganimda, men har qanday kontekstda dunyo
                      e'tiborini tortgan va qiziqish uyg'otgan texnologik
                      mo'jiza haqida yolg'iz qoldirish tavsiya etilmaydigan
                      fikrni shakllantirish uchun mish-mishlarga qanchalik
                      tayanganimni tushundim. va teng darajada tashvish.
                    </a>
                    <div class="es-article-footer mb-3">
                      <a href="#" class="es-article-writer">
                        <img class="img-fluid" src={Profile} alt="profile" />
                        Akbarali Khasanov
                      </a>
                      <div class="es-article-content-inner">
                        <button
                          class="btn es-article-chat-modal"
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
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.334 2.99999H11.6673V8.33333C11.6673 8.7 11.3673 9 11.0007 9H3.00065V9.66666C3.00065 10.4 3.60065 11 4.33398 11H11.0007L13.6673 13.6667V4.33333C13.6673 3.59999 13.0673 2.99999 12.334 2.99999ZM10.334 6.33333V1.66666C10.334 0.933328 9.73398 0.333328 9.00065 0.333328H1.66732C0.933984 0.333328 0.333984 0.933328 0.333984 1.66666V10.3333L3.00065 7.66666H9.00065C9.73398 7.66666 10.334 7.06666 10.334 6.33333Z"
                              fill="#969696"
                            />
                          </svg>
                          34
                        </button>
                        <div class="es-article-seen">
                          <img src={Seen} alt="seen" />
                          8.6 K
                        </div>
                      </div>
                    </div>
                    <div class="es-article-footer">
                      <div class="es-article-r-hour">
                        <img src={Time} alt="time" /> 3 daqiqa o‘qis h
                      </div>
                      <button class="btn es-btn-light es-btn-save">
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
                        Keyinroq o‘qish
                      </button>
                    </div>
                  </div>
                </div>
                <div class="es-search-item">
                  <div class="es-article-img">
                    <a href="#">
                      <img
                        src="img/search.jpg"
                        class="img-fluid"
                        alt="article"
                      />
                    </a>
                  </div>
                  <div class="es-article-content">
                    <div class="es-article-type">
                      vizual dizayn <span>17 Sep 2023</span>{" "}
                    </div>
                    <a href="#" class="es-article-title">
                      ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                    </a>
                    <a href="#" class="es-article-info">
                      Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani
                      yozishni boshlaganimda, men har qanday kontekstda dunyo
                      e'tiborini tortgan va qiziqish uyg'otgan texnologik
                      mo'jiza haqida yolg'iz qoldirish tavsiya etilmaydigan
                      fikrni shakllantirish uchun mish-mishlarga qanchalik
                      tayanganimni tushundim. va teng darajada tashvish.
                    </a>
                    <div class="es-article-footer mb-3">
                      <a href="#" class="es-article-writer">
                        <img class="img-fluid" src={Profile} alt="profile" />
                        Akbarali Khasanov
                      </a>
                      <div class="es-article-content-inner">
                        <button
                          class="btn es-article-chat-modal"
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
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.334 2.99999H11.6673V8.33333C11.6673 8.7 11.3673 9 11.0007 9H3.00065V9.66666C3.00065 10.4 3.60065 11 4.33398 11H11.0007L13.6673 13.6667V4.33333C13.6673 3.59999 13.0673 2.99999 12.334 2.99999ZM10.334 6.33333V1.66666C10.334 0.933328 9.73398 0.333328 9.00065 0.333328H1.66732C0.933984 0.333328 0.333984 0.933328 0.333984 1.66666V10.3333L3.00065 7.66666H9.00065C9.73398 7.66666 10.334 7.06666 10.334 6.33333Z"
                              fill="#969696"
                            />
                          </svg>
                          34
                        </button>
                        <div class="es-article-seen">
                          <img src={Seen} alt="seen" />
                          8.6 K
                        </div>
                      </div>
                    </div>
                    <div class="es-article-footer">
                      <div class="es-article-r-hour">
                        <img src={Time} alt="time" /> 3 daqiqa o‘qis h
                      </div>
                      <button class="btn es-btn-light es-btn-save">
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
                        Keyinroq o‘qish
                      </button>
                    </div>
                  </div>
                </div>
                <div class="es-search-item">
                  <div class="es-article-img">
                    <a href="#">
                      <img
                        src="img/search.jpg"
                        class="img-fluid"
                        alt="article"
                      />
                    </a>
                  </div>
                  <div class="es-article-content">
                    <div class="es-article-type">
                      vizual dizayn <span>17 Sep 2023</span>{" "}
                    </div>
                    <a href="#" class="es-article-title">
                      ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                    </a>
                    <a href="#" class="es-article-info">
                      Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani
                      yozishni boshlaganimda, men har qanday kontekstda dunyo
                      e'tiborini tortgan va qiziqish uyg'otgan texnologik
                      mo'jiza haqida yolg'iz qoldirish tavsiya etilmaydigan
                      fikrni shakllantirish uchun mish-mishlarga qanchalik
                      tayanganimni tushundim. va teng darajada tashvish.
                    </a>
                    <div class="es-article-footer mb-3">
                      <a href="#" class="es-article-writer">
                        <img class="img-fluid" src={Profile} alt="profile" />
                        Akbarali Khasanov
                      </a>
                      <div class="es-article-content-inner">
                        <button
                          class="btn es-article-chat-modal"
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
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.334 2.99999H11.6673V8.33333C11.6673 8.7 11.3673 9 11.0007 9H3.00065V9.66666C3.00065 10.4 3.60065 11 4.33398 11H11.0007L13.6673 13.6667V4.33333C13.6673 3.59999 13.0673 2.99999 12.334 2.99999ZM10.334 6.33333V1.66666C10.334 0.933328 9.73398 0.333328 9.00065 0.333328H1.66732C0.933984 0.333328 0.333984 0.933328 0.333984 1.66666V10.3333L3.00065 7.66666H9.00065C9.73398 7.66666 10.334 7.06666 10.334 6.33333Z"
                              fill="#969696"
                            />
                          </svg>
                          34
                        </button>
                        <div class="es-article-seen">
                          <img src={Seen} alt="seen" />
                          8.6 K
                        </div>
                      </div>
                    </div>
                    <div class="es-article-footer">
                      <div class="es-article-r-hour">
                        <img src={Time} alt="time" /> 3 daqiqa o‘qis h
                      </div>
                      <button class="btn es-btn-light es-btn-save">
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
                        Keyinroq o‘qish
                      </button>
                    </div>
                  </div>
                </div>
                <div class="es-search-item">
                  <div class="es-article-img">
                    <a href="#">
                      <img
                        src="img/search.jpg"
                        class="img-fluid"
                        alt="article"
                      />
                    </a>
                  </div>
                  <div class="es-article-content">
                    <div class="es-article-type">
                      vizual dizayn <span>17 Sep 2023</span>{" "}
                    </div>
                    <a href="#" class="es-article-title">
                      ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                    </a>
                    <a href="#" class="es-article-info">
                      Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani
                      yozishni boshlaganimda, men har qanday kontekstda dunyo
                      e'tiborini tortgan va qiziqish uyg'otgan texnologik
                      mo'jiza haqida yolg'iz qoldirish tavsiya etilmaydigan
                      fikrni shakllantirish uchun mish-mishlarga qanchalik
                      tayanganimni tushundim. va teng darajada tashvish.
                    </a>
                    <div class="es-article-footer mb-3">
                      <a href="#" class="es-article-writer">
                        <img class="img-fluid" src={Profile} alt="profile" />
                        Akbarali Khasanov
                      </a>
                      <div class="es-article-content-inner">
                        <button
                          class="btn es-article-chat-modal"
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
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.334 2.99999H11.6673V8.33333C11.6673 8.7 11.3673 9 11.0007 9H3.00065V9.66666C3.00065 10.4 3.60065 11 4.33398 11H11.0007L13.6673 13.6667V4.33333C13.6673 3.59999 13.0673 2.99999 12.334 2.99999ZM10.334 6.33333V1.66666C10.334 0.933328 9.73398 0.333328 9.00065 0.333328H1.66732C0.933984 0.333328 0.333984 0.933328 0.333984 1.66666V10.3333L3.00065 7.66666H9.00065C9.73398 7.66666 10.334 7.06666 10.334 6.33333Z"
                              fill="#969696"
                            />
                          </svg>
                          34
                        </button>
                        <div class="es-article-seen">
                          <img src={Seen} alt="seen" />
                          8.6 K
                        </div>
                      </div>
                    </div>
                    <div class="es-article-footer">
                      <div class="es-article-r-hour">
                        <img src={Time} alt="time" /> 3 daqiqa o‘qis h
                      </div>
                      <button class="btn es-btn-light es-btn-save">
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
                        Keyinroq o‘qish
                      </button>
                    </div>
                  </div>
                </div>
                <div class="es-search-item">
                  <div class="es-article-img">
                    <a href="#">
                      <img
                        src="img/search.jpg"
                        class="img-fluid"
                        alt="article"
                      />
                    </a>
                  </div>
                  <div class="es-article-content">
                    <div class="es-article-type">
                      vizual dizayn <span>17 Sep 2023</span>{" "}
                    </div>
                    <a href="#" class="es-article-title">
                      ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                    </a>
                    <a href="#" class="es-article-info">
                      Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani
                      yozishni boshlaganimda, men har qanday kontekstda dunyo
                      e'tiborini tortgan va qiziqish uyg'otgan texnologik
                      mo'jiza haqida yolg'iz qoldirish tavsiya etilmaydigan
                      fikrni shakllantirish uchun mish-mishlarga qanchalik
                      tayanganimni tushundim. va teng darajada tashvish.
                    </a>
                    <div class="es-article-footer mb-3">
                      <a href="#" class="es-article-writer">
                        <img class="img-fluid" src={Profile} alt="profile" />
                        Akbarali Khasanov
                      </a>
                      <div class="es-article-content-inner">
                        <button
                          class="btn es-article-chat-modal"
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
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.334 2.99999H11.6673V8.33333C11.6673 8.7 11.3673 9 11.0007 9H3.00065V9.66666C3.00065 10.4 3.60065 11 4.33398 11H11.0007L13.6673 13.6667V4.33333C13.6673 3.59999 13.0673 2.99999 12.334 2.99999ZM10.334 6.33333V1.66666C10.334 0.933328 9.73398 0.333328 9.00065 0.333328H1.66732C0.933984 0.333328 0.333984 0.933328 0.333984 1.66666V10.3333L3.00065 7.66666H9.00065C9.73398 7.66666 10.334 7.06666 10.334 6.33333Z"
                              fill="#969696"
                            />
                          </svg>
                          34
                        </button>
                        <div class="es-article-seen">
                          <img src={Seen} alt="seen" />
                          8.6 K
                        </div>
                      </div>
                    </div>
                    <div class="es-article-footer">
                      <div class="es-article-r-hour">
                        <img src={Time} alt="time" /> 3 daqiqa o‘qis h
                      </div>
                      <button class="btn es-btn-light es-btn-save">
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
                        Keyinroq o‘qish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="es-more-article">
            <button class="btn es-btn-light es-btn-save">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.209 2.2917C10.8507 0.933368 8.92571 0.150034 6.80904 0.366701C3.75071 0.675034 1.23404 3.15837 0.892376 6.2167C0.434043 10.2584 3.55904 13.6667 7.50071 13.6667C10.159 13.6667 12.4424 12.1084 13.509 9.8667C13.7757 9.30837 13.3757 8.6667 12.759 8.6667C12.4507 8.6667 12.159 8.83337 12.0257 9.10837C11.084 11.1334 8.82571 12.4167 6.35904 11.8667C4.50904 11.4584 3.01738 9.95003 2.62571 8.10003C1.92571 4.8667 4.38404 2.00003 7.50071 2.00003C8.88404 2.00003 10.1174 2.57503 11.0174 3.48337L9.75904 4.7417C9.23404 5.2667 9.60071 6.1667 10.3424 6.1667H13.334C13.7924 6.1667 14.1674 5.7917 14.1674 5.33337V2.3417C14.1674 1.60003 13.2674 1.22503 12.7424 1.75003L12.209 2.2917Z"
                  fill="#969696"
                />
              </svg>
              Ko’proq yuklash
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
