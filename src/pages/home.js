import More from "../assets/img/ic_more_t.svg";
import Vector from "../assets/img/ic_vector.svg";
import VectorS from "../assets/img/ic_vector.svg";
import TwoLine from "../assets/img/ic_two_line.svg";
import MoreLine from "../assets/img/ic_more_line.svg";
import Profile from "../assets/img/ic_profile.svg";
import Time from "../assets/img/ic_time.svg";
import Seen from "../assets/img/ic_seen.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadMoreArticles } from "../store/actions/articleAction";
import moment from "moment";
import { Nav, Tab } from "react-bootstrap";
import {
  showAuthSignUp,
  showAuthSignUpOptions,
  showCommentModal,
} from "../store/actions/modalAction";
import ArticleCard from "../components/article-card";
import { useState } from "react";

const Home = () => {
  const [toggle, setToggle] = useState(1);
  const { articles } = useSelector((state) => state.articleReducer);
  const { trendingTopics } = useSelector(
    (state) => state.trendingTopicsReducer
  );
  const { trendingArticles } = useSelector(
    (state) => state.trendingArticlesReducer
  );
  const dispatch = useDispatch();

  const loadMoreHandler = () => {
    dispatch(loadMoreArticles());
  };

  function updateToggle(id) {
    setToggle(id);
  }

  const [active, setActive] = useState("");

  const handleClick = (event) => {
    setActive(event.target.id);
    
  }

  // console.log("articles", articles);
  // console.log("trending topics", trendingTopics);
  // console.log("trending articles", trendingArticles);
  return (
    <main>
      <section className="es-regular-section es-main-section">
        <div className="container">
          <div className="es-main-section-content">
            <h1 className="es-main-section-title">
              Bizning maqsadimiz oʻzbek ilmiy kontentini boyitish
            </h1>
            <p className="es-main-section-desc">
              Bilimingizni maqolalarda ulashing va hamjamiyatni kengaytiring
            </p>
            <button
              className="btn es-btn-primary"
              type="button"
              onClick={() => dispatch(showAuthSignUpOptions())}
            >
              Hamjamiyatga qo’shiling
            </button>
            <div className="es-main-section-links">
              {trendingTopics.map((x) => (
                <Link to={`/topics/${x.id}`} key={"trending-topic-id-" + x.id}>
                  {`#${x.name}`}
                </Link>
              ))}
            </div>
            <Link to="/topics" className="es-main-section-more">
              Ko‘proq mavzularni ko‘rish
              <img src={More} alt="more" />
            </Link>
          </div>
        </div>
      </section>
      <section className="es-regular-section">
        <div className="container">
          <div className="es-section-header">
            <div className="es-section-title">
              <img src={VectorS} alt="vector" />
              <span>Mashxur maqolalar</span>
            </div>
          </div>
          <div className="es-popular-ar-list">
            {trendingArticles.map((y) => (
              <div
                className="es-popular-ar-item"
                key={"trending-article-id-" + y.id}
              >
                <div className="es-popular-ar-wrp">
                  <div className="es-popular-ar-img">
                    <Link to={`/article/${y.id}`}>
                      {y.image === "null" ? (
                        <img
                          src={require("../assets/img/article_2.jpg")}
                          alt="article"
                        />
                      ) : (
                        <img src={y.image} alt="article" />
                      )}
                    </Link>
                  </div>
                  <div className="es-popular-ar-content">
                    <p className="es-popular-ar-date">
                      {moment(y.createdAt).format("ll")}{" "}
                      <Link to={`/profile/${y.username}`}>
                        <span className="es-popular-ar-by">{y.fullname}</span>
                      </Link>
                    </p>
                    <Link
                      to={`/article/${y.id}`}
                      className="es-popular-ar-title"
                    >
                      {y.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="es-regular-section">
        <div className="container">
          <div className="es-section-header">
            <div className="es-section-title">
              <img src={Vector} alt="vector" />
              <span>Yangi maqolalar</span>
            </div>
            <div className="d-flex">
              <div className="nav nav-pills es-nav-pills" id="pills-tab">
                <div
                  className="nav-item"
                  role="presentation"
                  onClick={() => updateToggle(1)}
                >
                  <div
                    key={1}
                    className={active === "1" ? `nav-link + active` : "nav-link"}
                    id={"1"}
                    onClick={handleClick}>
                    <img src={TwoLine} alt="two" />
                  </div>
                </div>
                <div
                  className="nav-item"
                  role="presentation"
                  onClick={() => updateToggle(2)}
                >
                  <div
                    key={2}
                    className={active === "2" ? `nav-link + active` : "nav-link"}
                    id={"2"}
                    onClick={handleClick}>
                    <img src={MoreLine} alt="more" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className={toggle === 1 ? "show-tab-pane" : "tab-pane"}
              id="pills-two"
            >
              <div className="es-tab-pane-main">
                <div className="es-article-list">
                  {articles.map((x, idx) => {
                    return <ArticleCard key={"topic-" + idx} article={x} />;
                  })}
                </div>
              </div>
            </div>
            <div
              className={toggle === 2 ? "show-tab-pane" : "tab-pane"}
              id="pills-more"
            >
              <div className="es-search-list">
                {articles.map((x) => (
                  <div className="es-search-item" key={"topic-" + x.id}>
                    <div className="es-article-img">
                      <Link to={`/article/${x.id}`}>
                        {x.image === "null" ? (
                          <img
                            src={require("../assets/img/article_2.jpg")}
                            alt="article"
                          />
                        ) : (
                          <img src={x.image} alt="article" />
                        )}
                      </Link>
                    </div>
                    <div className="es-article-content">
                      <div className="es-article-type">
                        <Link to={`/topics/${x?.postTopics?.[0]?.id}`}>
                          {x?.postTopics?.[0]?.name}
                        </Link>{" "}
                        <span>{moment(x.createdAt).format("ll")}</span>{" "}
                      </div>
                      <Link
                        to={`/article/${x?.id}`}
                        className="es-article-title"
                      >
                        {x.title}
                      </Link>
                      <Link
                        to={`/article/${x?.id}`}
                        className="es-article-info"
                      >
                        {x.sub_title}
                      </Link>
                      <div className="es-article-footer mb-3">
                        <Link
                          to={`/profile/${x?.user?.username}`}
                          className="es-article-writer"
                        >
                          <img
                            className="img-fluid"
                            src={x.user.user_img}
                            alt="profile"
                          />
                          {x.user.full_name}
                        </Link>
                        <div className="es-article-content-inner">
                          <button
                            className="btn es-article-chat-modal"
                            onClick={() => dispatch(showCommentModal())}
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
                            {x.body.comments}
                          </button>
                          <div className="es-article-seen">
                            <img src={Seen} alt="seen" />
                            {x.body.views}
                          </div>
                        </div>
                      </div>
                      <div className="es-article-footer">
                        <div className="es-article-r-hour">
                        {~~(x.body.readingTimes / 60)} daqiqa o‘qish
                        </div>
                        <button className="btn es-btn-light es-btn-save">
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
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="es-more-article">
            <button
              className="btn es-btn-light es-btn-save"
              onClick={loadMoreHandler}
            >
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
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
