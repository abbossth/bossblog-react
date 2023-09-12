import React from "react";
import Close from "../assets/img/ic_close.svg";

const WriteArticleForm = () => {
  return (
    <main>
      <section className="es-regular-section es-article-form">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-12 col-sm-12">
              <div className="form-group es-ar-form">
                <label for="articleImage">Hikoyani oldindan ko'rish</label>
                <div className="es-article-img-wrp">
                  <img
                    className="img-fluid"
                    src={require("../assets/img/banner_profile.jpg")}
                    alt="article"
                  />
                </div>
              </div>
              <div className="form-group es-ar-form">
                <label for="es-article-select">Faqat menman</label>
                <input
                  type="email"
                  className="form-control"
                  id="es-article-select"
                  aria-describedby="es-about-select"
                  placeholder="Faqat menman"
                />
                <small id="es-about-select" className="form-text">
                  Eslatma: Bu yerdagi oʻzgarishlar sizning hikoyangizning
                  ommaviy joylarda, masalan, Medium bosh sahifasida va
                  obunachilarning kirish qutilarida qanday koʻrinishiga taʼsir
                  qiladi, bu hikoyaning oʻziga emas.
                </small>
              </div>
            </div>
            <div className="col-xl-5 col-md-12 col-sm-12">
              <div className="es-article-writer-info">
                Nashriyot: <span> Akbarali Xasanov</span>
              </div>
              <div className="input-group es-af-input-group">
                <small
                  id="es-about-ar-key"
                  className="form-text es-about-ar-key"
                >
                  {" "}
                  Mavzularni qo'shing yoki o'zgartiring (5 tagacha) o'quvchilar
                  hikoyangiz nima haqida ekanligini bilishlari uchun
                </small>
                <div>
                  <label for="articleImage">Kalit so’zlar</label>
                </div>
                <div className="d-flex">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      Label <img src={Close} alt="close" />
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="es-about-ar-key"
                  />
                </div>
              </div>
              <div className="es-article-form-btn">
                <button className="btn es-btn-save es-btn-ar-form">
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
                      d="M12.7872 0.991667C12.4706 0.675 12.0456 0.5 11.6039 0.5H2.29557C1.37057 0.5 0.628906 1.25 0.628906 2.16667V13.8333C0.628906 14.75 1.37891 15.5 2.29557 15.5H13.9622C14.8789 15.5 15.6289 14.75 15.6289 13.8333V4.525C15.6289 4.08333 15.4539 3.65833 15.1372 3.35L12.7872 0.991667ZM8.12891 13.8333C6.74557 13.8333 5.62891 12.7167 5.62891 11.3333C5.62891 9.95 6.74557 8.83333 8.12891 8.83333C9.51224 8.83333 10.6289 9.95 10.6289 11.3333C10.6289 12.7167 9.51224 13.8333 8.12891 13.8333ZM8.96224 5.5H3.96224C3.04557 5.5 2.29557 4.75 2.29557 3.83333C2.29557 2.91667 3.04557 2.16667 3.96224 2.16667H8.96224C9.87891 2.16667 10.6289 2.91667 10.6289 3.83333C10.6289 4.75 9.87891 5.5 8.96224 5.5Z"
                      fill="#969696"
                    />
                  </svg>
                  Saqlash
                </button>
                <button className="btn es-profile-save es-btn-ar-form ">
                  Chop etish
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WriteArticleForm;
