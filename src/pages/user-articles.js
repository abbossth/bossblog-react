import React from "react";
import Time from "../assets/img/ic_time.svg";
import Seen from "../assets/img/ic_seen.svg";

const UserArticles = () => {
  return (
    <main>
      <section className="es-article-header es-regular-section">
        <div className="es-av-header">
          <div className="container">
            <div className="es-av-title">Maqolalar</div>
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
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="pills-published-tab"
                data-toggle="pill"
                href="#pills-published"
                role="tab"
                aria-controls="pills-published"
                aria-selected="true"
              >
                Chop etilganlar
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-draft-tab"
                data-toggle="pill"
                href="#pills-draft"
                role="tab"
                aria-controls="pills-draft"
                aria-selected="false"
              >
                Qoralamalar
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-moderation-tab"
                data-toggle="pill"
                href="#pills-moderation"
                role="tab"
                aria-controls="pills-moderation"
                aria-selected="false"
              >
                Moderatsiyaga yuborilganlar
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-published"
              role="tabpanel"
              aria-labelledby="pills-published-tab"
            >
              <div className="es-article-list">
                <div className="es-article-item">
                  <div className="es-article-img">
                    <a href="#">
                      <img
                        src={require("../assets/img/article_2.jpg")}
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
                    <div className="es-article-footer ">
                      <div className="es-article-u-btn">
                        <button className="btn es-btn-light es-btn-save sm-hide">
                          <svg
                            width="10"
                            height="12"
                            viewBox="0 0 10 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.33398 0H1.66732C0.933984 0 0.333984 0.6 0.333984 1.33333V12L5.00065 10L9.66732 12V1.33333C9.66732 0.6 9.06732 0 8.33398 0ZM8.33398 10L5.00065 8.54667L1.66732 10V2C1.66732 1.63333 1.96732 1.33333 2.33398 1.33333H7.66732C8.03398 1.33333 8.33398 1.63333 8.33398 2V10Z"
                              fill="#969696"
                            />
                          </svg>
                          Keyinroq o‘qish
                        </button>
                        <div className="es-article-r-hour">
                          <img src={Time} alt="time" /> 3 daqiqa o‘qish
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
                          8.6K
                        </div>
                      </div>
                      <div className="es-article-content-inner">
                        <button className="btn es-btn-light es-btn-save es-green">
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
                              d="M2 11.64V13.6667C2 13.8534 2.14667 14 2.33333 14H4.36C4.44667 14 4.53333 13.9667 4.59333 13.9L11.8733 6.62669L9.37333 4.12669L2.1 11.4C2.03333 11.4667 2 11.5467 2 11.64ZM13.8067 4.69335C14.0667 4.43335 14.0667 4.01335 13.8067 3.75335L12.2467 2.19335C11.9867 1.93335 11.5667 1.93335 11.3067 2.19335L10.0867 3.41335L12.5867 5.91335L13.8067 4.69335Z"
                              fill="#00BA34"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2 11.64V13.6667C2 13.8534 2.14667 14 2.33333 14H4.36C4.44667 14 4.53333 13.9667 4.59333 13.9L11.8733 6.62669L9.37333 4.12669L2.1 11.4C2.03333 11.4667 2 11.5467 2 11.64ZM13.8067 4.69335C14.0667 4.43335 14.0667 4.01335 13.8067 3.75335L12.2467 2.19335C11.9867 1.93335 11.5667 1.93335 11.3067 2.19335L10.0867 3.41335L12.5867 5.91335L13.8067 4.69335Z"
                              fill="white"
                              fill-opacity="0.4"
                            />
                          </svg>
                          Tahrirlash
                        </button>
                        <button className="btn es-btn-light es-btn-save es-red">
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
                              d="M3.9987 12.6667C3.9987 13.4 4.5987 14 5.33203 14H10.6654C11.3987 14 11.9987 13.4 11.9987 12.6667V6C11.9987 5.26667 11.3987 4.66667 10.6654 4.66667H5.33203C4.5987 4.66667 3.9987 5.26667 3.9987 6V12.6667ZM5.9987 6H9.9987C10.3654 6 10.6654 6.3 10.6654 6.66667V12C10.6654 12.3667 10.3654 12.6667 9.9987 12.6667H5.9987C5.63203 12.6667 5.33203 12.3667 5.33203 12V6.66667C5.33203 6.3 5.63203 6 5.9987 6ZM10.332 2.66667L9.8587 2.19333C9.7387 2.07333 9.56536 2 9.39203 2H6.60536C6.43203 2 6.2587 2.07333 6.1387 2.19333L5.66536 2.66667H3.9987C3.63203 2.66667 3.33203 2.96667 3.33203 3.33333C3.33203 3.7 3.63203 4 3.9987 4H11.9987C12.3654 4 12.6654 3.7 12.6654 3.33333C12.6654 2.96667 12.3654 2.66667 11.9987 2.66667H10.332Z"
                              fill="#E92C2C"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.9987 12.6667C3.9987 13.4 4.5987 14 5.33203 14H10.6654C11.3987 14 11.9987 13.4 11.9987 12.6667V6C11.9987 5.26667 11.3987 4.66667 10.6654 4.66667H5.33203C4.5987 4.66667 3.9987 5.26667 3.9987 6V12.6667ZM5.9987 6H9.9987C10.3654 6 10.6654 6.3 10.6654 6.66667V12C10.6654 12.3667 10.3654 12.6667 9.9987 12.6667H5.9987C5.63203 12.6667 5.33203 12.3667 5.33203 12V6.66667C5.33203 6.3 5.63203 6 5.9987 6ZM10.332 2.66667L9.8587 2.19333C9.7387 2.07333 9.56536 2 9.39203 2H6.60536C6.43203 2 6.2587 2.07333 6.1387 2.19333L5.66536 2.66667H3.9987C3.63203 2.66667 3.33203 2.96667 3.33203 3.33333C3.33203 3.7 3.63203 4 3.9987 4H11.9987C12.3654 4 12.6654 3.7 12.6654 3.33333C12.6654 2.96667 12.3654 2.66667 11.9987 2.66667H10.332Z"
                              fill="white"
                              fill-opacity="0.4"
                            />
                          </svg>
                          O‘chirish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-draft"
              role="tabpanel"
              aria-labelledby="pills-draft-tab"
            >
              <div className="es-article-list">
                <div className="es-article-item">
                  <div className="es-article-img">
                    <a href="#">
                      <img
                        src={require("../assets/img/article_2.jpg")}
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
                    <div className="es-article-footer ">
                      <div className="es-article-u-btn">
                        <button className="btn es-btn-light es-btn-save sm-hide">
                          <svg
                            width="10"
                            height="12"
                            viewBox="0 0 10 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.33398 0H1.66732C0.933984 0 0.333984 0.6 0.333984 1.33333V12L5.00065 10L9.66732 12V1.33333C9.66732 0.6 9.06732 0 8.33398 0ZM8.33398 10L5.00065 8.54667L1.66732 10V2C1.66732 1.63333 1.96732 1.33333 2.33398 1.33333H7.66732C8.03398 1.33333 8.33398 1.63333 8.33398 2V10Z"
                              fill="#969696"
                            />
                          </svg>
                          Keyinroq o‘qish
                        </button>
                        <div className="es-article-r-hour">
                          <img src={Time} alt="time" /> 3 daqiqa o‘qish
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
                          8.6K
                        </div>
                      </div>
                      <div className="es-article-content-inner">
                        <button className="btn es-btn-light es-btn-save es-green">
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
                              d="M2 11.64V13.6667C2 13.8534 2.14667 14 2.33333 14H4.36C4.44667 14 4.53333 13.9667 4.59333 13.9L11.8733 6.62669L9.37333 4.12669L2.1 11.4C2.03333 11.4667 2 11.5467 2 11.64ZM13.8067 4.69335C14.0667 4.43335 14.0667 4.01335 13.8067 3.75335L12.2467 2.19335C11.9867 1.93335 11.5667 1.93335 11.3067 2.19335L10.0867 3.41335L12.5867 5.91335L13.8067 4.69335Z"
                              fill="#00BA34"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2 11.64V13.6667C2 13.8534 2.14667 14 2.33333 14H4.36C4.44667 14 4.53333 13.9667 4.59333 13.9L11.8733 6.62669L9.37333 4.12669L2.1 11.4C2.03333 11.4667 2 11.5467 2 11.64ZM13.8067 4.69335C14.0667 4.43335 14.0667 4.01335 13.8067 3.75335L12.2467 2.19335C11.9867 1.93335 11.5667 1.93335 11.3067 2.19335L10.0867 3.41335L12.5867 5.91335L13.8067 4.69335Z"
                              fill="white"
                              fill-opacity="0.4"
                            />
                          </svg>
                          Tahrirlash
                        </button>
                        <button className="btn es-btn-light es-btn-save es-red">
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
                              d="M3.9987 12.6667C3.9987 13.4 4.5987 14 5.33203 14H10.6654C11.3987 14 11.9987 13.4 11.9987 12.6667V6C11.9987 5.26667 11.3987 4.66667 10.6654 4.66667H5.33203C4.5987 4.66667 3.9987 5.26667 3.9987 6V12.6667ZM5.9987 6H9.9987C10.3654 6 10.6654 6.3 10.6654 6.66667V12C10.6654 12.3667 10.3654 12.6667 9.9987 12.6667H5.9987C5.63203 12.6667 5.33203 12.3667 5.33203 12V6.66667C5.33203 6.3 5.63203 6 5.9987 6ZM10.332 2.66667L9.8587 2.19333C9.7387 2.07333 9.56536 2 9.39203 2H6.60536C6.43203 2 6.2587 2.07333 6.1387 2.19333L5.66536 2.66667H3.9987C3.63203 2.66667 3.33203 2.96667 3.33203 3.33333C3.33203 3.7 3.63203 4 3.9987 4H11.9987C12.3654 4 12.6654 3.7 12.6654 3.33333C12.6654 2.96667 12.3654 2.66667 11.9987 2.66667H10.332Z"
                              fill="#E92C2C"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.9987 12.6667C3.9987 13.4 4.5987 14 5.33203 14H10.6654C11.3987 14 11.9987 13.4 11.9987 12.6667V6C11.9987 5.26667 11.3987 4.66667 10.6654 4.66667H5.33203C4.5987 4.66667 3.9987 5.26667 3.9987 6V12.6667ZM5.9987 6H9.9987C10.3654 6 10.6654 6.3 10.6654 6.66667V12C10.6654 12.3667 10.3654 12.6667 9.9987 12.6667H5.9987C5.63203 12.6667 5.33203 12.3667 5.33203 12V6.66667C5.33203 6.3 5.63203 6 5.9987 6ZM10.332 2.66667L9.8587 2.19333C9.7387 2.07333 9.56536 2 9.39203 2H6.60536C6.43203 2 6.2587 2.07333 6.1387 2.19333L5.66536 2.66667H3.9987C3.63203 2.66667 3.33203 2.96667 3.33203 3.33333C3.33203 3.7 3.63203 4 3.9987 4H11.9987C12.3654 4 12.6654 3.7 12.6654 3.33333C12.6654 2.96667 12.3654 2.66667 11.9987 2.66667H10.332Z"
                              fill="white"
                              fill-opacity="0.4"
                            />
                          </svg>
                          O‘chirish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-moderation"
              role="tabpanel"
              aria-labelledby="pills-moderation-tab"
            >
              <div className="es-article-list">
                <div className="es-article-item">
                  <div className="es-article-img">
                    <a href="#">
                      <img
                        src={require("../assets/img/article_2.jpg")}
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
                    <div className="es-article-footer ">
                      <div className="es-article-u-btn">
                        <button className="btn es-btn-light es-btn-save sm-hide">
                          <svg
                            width="10"
                            height="12"
                            viewBox="0 0 10 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.33398 0H1.66732C0.933984 0 0.333984 0.6 0.333984 1.33333V12L5.00065 10L9.66732 12V1.33333C9.66732 0.6 9.06732 0 8.33398 0ZM8.33398 10L5.00065 8.54667L1.66732 10V2C1.66732 1.63333 1.96732 1.33333 2.33398 1.33333H7.66732C8.03398 1.33333 8.33398 1.63333 8.33398 2V10Z"
                              fill="#969696"
                            />
                          </svg>
                          Keyinroq o‘qish
                        </button>
                        <div className="es-article-r-hour">
                          <img src={Time} alt="time" /> 3 daqiqa o‘qish
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
                          8.6K
                        </div>
                      </div>
                      <div className="es-article-content-inner">
                        <button className="btn es-btn-light es-btn-save es-green">
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
                              d="M2 11.64V13.6667C2 13.8534 2.14667 14 2.33333 14H4.36C4.44667 14 4.53333 13.9667 4.59333 13.9L11.8733 6.62669L9.37333 4.12669L2.1 11.4C2.03333 11.4667 2 11.5467 2 11.64ZM13.8067 4.69335C14.0667 4.43335 14.0667 4.01335 13.8067 3.75335L12.2467 2.19335C11.9867 1.93335 11.5667 1.93335 11.3067 2.19335L10.0867 3.41335L12.5867 5.91335L13.8067 4.69335Z"
                              fill="#00BA34"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2 11.64V13.6667C2 13.8534 2.14667 14 2.33333 14H4.36C4.44667 14 4.53333 13.9667 4.59333 13.9L11.8733 6.62669L9.37333 4.12669L2.1 11.4C2.03333 11.4667 2 11.5467 2 11.64ZM13.8067 4.69335C14.0667 4.43335 14.0667 4.01335 13.8067 3.75335L12.2467 2.19335C11.9867 1.93335 11.5667 1.93335 11.3067 2.19335L10.0867 3.41335L12.5867 5.91335L13.8067 4.69335Z"
                              fill="white"
                              fill-opacity="0.4"
                            />
                          </svg>
                          Tahrirlash
                        </button>
                        <button className="btn es-btn-light es-btn-save es-red">
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
                              d="M3.9987 12.6667C3.9987 13.4 4.5987 14 5.33203 14H10.6654C11.3987 14 11.9987 13.4 11.9987 12.6667V6C11.9987 5.26667 11.3987 4.66667 10.6654 4.66667H5.33203C4.5987 4.66667 3.9987 5.26667 3.9987 6V12.6667ZM5.9987 6H9.9987C10.3654 6 10.6654 6.3 10.6654 6.66667V12C10.6654 12.3667 10.3654 12.6667 9.9987 12.6667H5.9987C5.63203 12.6667 5.33203 12.3667 5.33203 12V6.66667C5.33203 6.3 5.63203 6 5.9987 6ZM10.332 2.66667L9.8587 2.19333C9.7387 2.07333 9.56536 2 9.39203 2H6.60536C6.43203 2 6.2587 2.07333 6.1387 2.19333L5.66536 2.66667H3.9987C3.63203 2.66667 3.33203 2.96667 3.33203 3.33333C3.33203 3.7 3.63203 4 3.9987 4H11.9987C12.3654 4 12.6654 3.7 12.6654 3.33333C12.6654 2.96667 12.3654 2.66667 11.9987 2.66667H10.332Z"
                              fill="#E92C2C"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.9987 12.6667C3.9987 13.4 4.5987 14 5.33203 14H10.6654C11.3987 14 11.9987 13.4 11.9987 12.6667V6C11.9987 5.26667 11.3987 4.66667 10.6654 4.66667H5.33203C4.5987 4.66667 3.9987 5.26667 3.9987 6V12.6667ZM5.9987 6H9.9987C10.3654 6 10.6654 6.3 10.6654 6.66667V12C10.6654 12.3667 10.3654 12.6667 9.9987 12.6667H5.9987C5.63203 12.6667 5.33203 12.3667 5.33203 12V6.66667C5.33203 6.3 5.63203 6 5.9987 6ZM10.332 2.66667L9.8587 2.19333C9.7387 2.07333 9.56536 2 9.39203 2H6.60536C6.43203 2 6.2587 2.07333 6.1387 2.19333L5.66536 2.66667H3.9987C3.63203 2.66667 3.33203 2.96667 3.33203 3.33333C3.33203 3.7 3.63203 4 3.9987 4H11.9987C12.3654 4 12.6654 3.7 12.6654 3.33333C12.6654 2.96667 12.3654 2.66667 11.9987 2.66667H10.332Z"
                              fill="white"
                              fill-opacity="0.4"
                            />
                          </svg>
                          O‘chirish
                        </button>
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

export default UserArticles;
