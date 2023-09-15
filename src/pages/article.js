import { Link } from "react-router-dom";
import { ReactComponent as ProfilePhoto } from "../assets/img/profile_img.svg";
import { ReactComponent as TelegramIcon } from "../assets/img/ic_telegram.svg";
import { ReactComponent as FacebookIcon } from "../assets/img/ic_facebook (2).svg";
import { ReactComponent as TwitterIcon } from "../assets/img/ic_twiter.svg";
import { ReactComponent as DateIcon } from "../assets/img/ic_date.svg";
import { ReactComponent as TimeIcon } from "../assets/img/ic_time_dark.svg";
import { ReactComponent as CommentIcon } from "../assets/img/ic_comments.svg";

const Article = () => {
  return (
    <main>
      <section class="es-article-header es-regular-section">
        <div class="es-av-header">
          <div class="container">
            <div class="es-av-title">
              ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
            </div>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Article
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section class="es-regular-section">
        <div class="container">
          <div class="es-av-writer">
            <Link to={`/profile/test`}>
              <ProfilePhoto className="me-2" />
              {/* <img
                src={require("../assets/img/profile_img.svg")}
                alt="profile"
              /> */}
              Akbarali Khasanov
            </Link>
            <button class="btn es-btn-follow">Obuna bo‘lish</button>
          </div>
          <div class="es-av-nav">
            <nav class="nav">
              <div class="nav-link pl-0 active">
                <DateIcon />
                14 Iyun, 2023
              </div>
              <div class="nav-link">
                <TimeIcon />
                <span>3 daqiqa</span>
              </div>
              <button
                class="nav-link btn"
                data-target="#commentModal"
                data-toggle="modal"
              >
                <CommentIcon />
                <span>8 Izoh</span>
              </button>
            </nav>
            <div class="es-btns-sm">
              <button class="btn es-btn-light es-btn-save">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.33398 0H1.66732C0.933984 0 0.333984 0.6 0.333984 1.33333V12L5.00065 10L9.66732 12V1.33333C9.66732 0.6 9.06732 0 8.33398 0Z"
                    fill="#969696"
                  />
                </svg>
                {/* <span>Saqlash</span> */}
              </button>
            </div>
          </div>
          <div class="es-av-banner">
            <img
              class="img-fluid w-100"
              src={require("../assets/img/chatgpt.jpg")}
              alt="ChatGPT"
            />
          </div>
          <div class="es-av-content">
            <h2 class="es-av-heading">
              Might have been that first time you looked through a telescope.
              But for many of us, it was that first time we saw a rain of fire
              from the sky that we eventually.
            </h2>
            <p class="es-av-text">
              If you are a serious astronomy fanatic like a lot of us are, you
              can probably remember that one event in childhood that started you
              along this exciting hobby. It might have been that first time you
              looked through a telescope. But for many of us, it was that first
              time we saw a rain of fire from the sky that we eventually came to
              know as a meteoroid shower. At the time when you see the first
              one, it’s easy to remember the movie “war of the worlds” or some
              other fantastic image of aliens entering our atmosphere in droves
              to take over the planet.
            </p>
            <p class="es-av-text">
              If you are a serious astronomy fanatic like a lot of us are, you
              can probably remember that one event in childhood that started you
              along this exciting hobby. It might have been that first time you
              looked through a telescope. But for many of us, it was that first
              time we saw a rain of fire from the sky that we eventually came to
              know as a meteoroid shower.
            </p>
            <h5 class="es-av-subheading">
              Might have been that first time you looked through a telescope.
              But for many of us, it was that first time we saw a rain of fire
              from the sky that we eventually.
            </h5>
            <p class="es-av-text">
              If you are a serious astronomy fanatic like a lot of us are, you
              can probably remember that one event in childhood that started you
              along this exciting hobby.
            </p>
          </div>
          <div class="es-av-footer">
            <div class="es-av-sending">
              <div class="es-av-sending-title">Ulashish</div>
              <Link to="#">
                <FacebookIcon />
                {/* <img src="img/ic_facebook (2).svg" alt="facebook" /> */}
              </Link>
              <Link to="#">
                <TelegramIcon />
                {/* <img src="img/ic_telegram.svg" alt="telegram" /> */}
              </Link>
              <Link to="#">
                <TwitterIcon />
                {/* <img src="img/ic_twiter.svg" alt="twitter" /> */}
              </Link>
            </div>
            <div class="es-av-reaction">
              <button class="btn es-btn-light es-btn-save">
                <svg
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.934 0.716722L6.31732 5.33339C6.00898 5.64172 5.83398 6.06672 5.83398 6.50839V14.8334C5.83398 15.7501 6.58398 16.5001 7.50065 16.5001H15.0007C15.6673 16.5001 16.2673 16.1001 16.534 15.4917L19.2507 9.15005C19.9507 7.50006 18.7423 5.66672 16.9507 5.66672H12.2423L13.034 1.85006C13.1173 1.43339 12.9923 1.00839 12.6923 0.708389C12.2007 0.225056 11.4173 0.225056 10.934 0.716722ZM2.50065 16.5001C3.41732 16.5001 4.16732 15.7501 4.16732 14.8334V8.16672C4.16732 7.25006 3.41732 6.50006 2.50065 6.50006C1.58398 6.50006 0.833984 7.25006 0.833984 8.16672V14.8334C0.833984 15.7501 1.58398 16.5001 2.50065 16.5001Z"
                    fill="#969696"
                  />
                </svg>{" "}
                +5
              </button>
              <button class="btn es-btn-light es-btn-save">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.7667 2.5H7.23333C7.01667 2.5 6.8 2.59167 6.65 2.74167L2.74167 6.65C2.59167 6.8 2.5 7.01667 2.5 7.23333V12.7583C2.5 12.9833 2.59167 13.1917 2.74167 13.35L6.64167 17.25C6.8 17.4083 7.01667 17.5 7.23333 17.5H12.7583C12.9833 17.5 13.1917 17.4083 13.35 17.2583L17.25 13.3583C17.4083 13.2 17.4917 12.9917 17.4917 12.7667V7.23333C17.4917 7.00833 17.4 6.8 17.25 6.64167L13.35 2.74167C13.2 2.59167 12.9833 2.5 12.7667 2.5ZM10 14.4167C9.4 14.4167 8.91667 13.9333 8.91667 13.3333C8.91667 12.7333 9.4 12.25 10 12.25C10.6 12.25 11.0833 12.7333 11.0833 13.3333C11.0833 13.9333 10.6 14.4167 10 14.4167ZM10 10.8333C9.54167 10.8333 9.16667 10.4583 9.16667 10V6.66667C9.16667 6.20833 9.54167 5.83333 10 5.83333C10.4583 5.83333 10.8333 6.20833 10.8333 6.66667V10C10.8333 10.4583 10.4583 10.8333 10 10.8333Z"
                    fill="#969696"
                  />
                </svg>{" "}
                Shikoyat qilish
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="es-regular-section">
        <div class="container">
          <h2 class="es-section-title">Tavsiya qilinganlar</h2>
          <div
            class="es-category-list category-slick"
            style={{ marginLeft: "-1.125rem", marginRight: "-1.125rem" }}
          >
            <div class="es-category-item">
              <div class="es-category-img">
                <a href="#">
                  <img
                    class="lazy img-fluid"
                    src="img/article_2.jpg"
                    alt="article"
                  />
                </a>
              </div>
              <div class="es-category-ar-title">
                <a href="#">
                  Republican presidential debate beset by bickering and boos for
                  Trump critics
                </a>
              </div>
            </div>
            <div class="es-category-item">
              <div class="es-category-img">
                <a href="#">
                  <img
                    class="lazy img-fluid"
                    src="img/article_2.jpg"
                    alt="article"
                  />
                </a>
              </div>
              <div class="es-category-ar-title">
                <a href="#">
                  Republican presidential debate beset by bickering and boos for
                  Trump critics
                </a>
              </div>
            </div>
            <div class="es-category-item">
              <div class="es-category-img">
                <a href="#">
                  <img
                    class="lazy img-fluid"
                    src="img/article_2.jpg"
                    alt="article"
                  />
                </a>
              </div>
              <div class="es-category-ar-title">
                <a href="#">
                  Republican presidential debate beset by bickering and boos for
                  Trump critics
                </a>
              </div>
            </div>
            <div class="es-category-item">
              <div class="es-category-img">
                <a href="#">
                  <img
                    class="lazy img-fluid"
                    src="img/article_2.jpg"
                    alt="article"
                  />
                </a>
              </div>
              <div class="es-category-ar-title">
                <a href="#">
                  Republican presidential debate beset by bickering and boos for
                  Trump critics
                </a>
              </div>
            </div>
            <div class="es-category-item">
              <div class="es-category-img">
                <a href="#">
                  <img
                    class="lazy img-fluid"
                    src="img/article_2.jpg"
                    alt="article"
                  />
                </a>
              </div>
              <div class="es-category-ar-title">
                <a href="#">
                  Republican presidential debate beset by bickering and boos for
                  Trump critics
                </a>
              </div>
            </div>
            <div class="es-category-item">
              <div class="es-category-img">
                <a href="#">
                  <img
                    class="lazy img-fluid"
                    src="img/article_2.jpg"
                    alt="article"
                  />
                </a>
              </div>
              <div class="es-category-ar-title">
                <a href="#">
                  Republican presidential debate beset by bickering and boos for
                  Trump critics
                </a>
              </div>
            </div>
            <div class="es-category-item">
              <div class="es-category-img">
                <a href="#">
                  <img
                    class="lazy img-fluid"
                    src="img/article_2.jpg"
                    alt="article"
                  />
                </a>
              </div>
              <div class="es-category-ar-title">
                <a href="#">
                  Republican presidential debate beset by bickering and boos for
                  Trump critics
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default Article;
