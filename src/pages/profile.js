import ProfileIcon from "img/ic_profile.svg";
import Time from "img/ic_time.svg";
import Seen from "img/ic_seen.svg";

const Profile = () => {
  return (
    <main>
      <section class="es-regular-section es-profile-header-section">
        <div class="es-profile-header"></div>
        <div class="container">
          <div class="es-profile-header-content">
            <div class="es-profile-header-left-wrp">
              <div class="es-profile-img">
                <img src={require("../assets/img/team.jpg")} alt="profile" />
              </div>
              <div class="es-profile-owner sm-hide">
                <h3 class="es-profile-owner-n">Akbarali Khasanov</h3>
                <button class="btn es-btn-primary">Obuna bo’lish</button>
              </div>
            </div>
            <div class="es-profile-header-right-wrp">
              <div class="es-profile-owner xl-hide">
                <h3 class="es-profile-owner-n">Akbarali Khasanov</h3>
                <button class="btn es-btn-primary">Obuna bo’lish</button>
              </div>
              <div class="es-profile-aricles">
                <div class="es-profile-ar-h">Maqolalar</div>
                <div class="es-profile-ar-n">48</div>
              </div>
              <div class="es-profile-followers">
                <div class="es-profile-ar-h">Obunachilar</div>
                <div class="es-profile-ar-n">1234</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="es-regular-section">
        <div class="container">
          <div class="es-profile-bio">
            На третьем курсе Азамат начал заниматься рэпом. Работал хирургом, но
            в скором времени бросил и стал заниматься музыкой. Занимается рэпом
            с 2007 года. В 2007—2013 гг. выступал под псевдонимом Shau, затем
            сменил его на MiyaGi. Свой псевдоним взял в честь мистера Мияги из
            фильма «Парень-каратист». В 2009 году Азамат вступил в творческое
            объединение Dope Records, куда также, помимо Эндшпиля, входили Намо
            Миниган, Shuga, Асаб, SH Kera, группа The GuyS. В августе 2014 года
            Азамат основал собственный лейбл Asata, куда, помимо него, вошли
            Намо Миниган и Amigo. За время пребывания в Asata Азамат выпустил,
            ставшие успешными на тот момент, клипы на треки «Колибри», «Дом»,
            «Бонни».
          </div>
        </div>
      </section>
      <section class="es-regular-section">
        <div class="container">
          <div class="es-article-list">
            <div class="es-article-item">
              <div class="es-article-img">
                <a href="#">
                  <img src={require("../assets/img/article_2.jpg")} alt="article" />
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
                  Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani yozishni
                  boshlaganimda, men har qanday kontekstda dunyo e'tiborini
                  tortgan va qiziqish uyg'otgan texnologik mo'jiza haqida
                  yolg'iz qoldirish tavsiya etilmaydigan fikrni shakllantirish
                  uchun mish-mishlarga qanchalik tayanganimni tushundim. va teng
                  darajada tashvish.
                </a>
                <div class="es-article-footer">
                  <div class="es-article-content-inner">
                    <a href="#" class="es-article-writer">
                      <img
                        class="img-fluid"
                        src={ProfileIcon}
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
                  <img src={require("../assets/img/article_2.jpg")} alt="article" />
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
                  Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani yozishni
                  boshlaganimda, men har qanday kontekstda dunyo e'tiborini
                  tortgan va qiziqish uyg'otgan texnologik mo'jiza haqida
                  yolg'iz qoldirish tavsiya etilmaydigan fikrni shakllantirish
                  uchun mish-mishlarga qanchalik tayanganimni tushundim. va teng
                  darajada tashvish.
                </a>
                <div class="es-article-footer">
                  <div class="es-article-content-inner">
                    <a href="#" class="es-article-writer">
                      <img
                        class="img-fluid"
                        src={ProfileIcon}
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
                  <img src="img/article_2.jpg" alt="article" />
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
                  Ushbu so'nggi hodisa, ChatGPT haqida ushbu maqolani yozishni
                  boshlaganimda, men har qanday kontekstda dunyo e'tiborini
                  tortgan va qiziqish uyg'otgan texnologik mo'jiza haqida
                  yolg'iz qoldirish tavsiya etilmaydigan fikrni shakllantirish
                  uchun mish-mishlarga qanchalik tayanganimni tushundim. va teng
                  darajada tashvish.
                </a>
                <div class="es-article-footer">
                  <div class="es-article-content-inner">
                    <a href="#" class="es-article-writer">
                      <img
                        class="img-fluid"
                        src={ProfileIcon}
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
                      <img src={Seen} alt="time" /> 3 daqiqa o‘qis h
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
      </section>
    </main>
  );
};

export default Profile;
