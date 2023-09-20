import React, { useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import Vector from "../assets/img/ic_vector.svg";
import ArticleCard from "../components/article-card";
import { useDispatch, useSelector } from "react-redux";
import {
  getForYouArticles,
  loadMoreForYouArticles,
} from "../store/actions/forYouAction";

const AuthorizedHome = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.loginReducer);
  const { articles, limit, currentPage } = useSelector(
    (state) => state.forYouArticleReducer
  );
  const fetchForYou = async () => {
    try {
      const res = await axios.get(
        `/posts/foryou?limit=${limit}&page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(getForYouArticles(res?.data));
      console.log("for you", res?.data);
    } catch (err) {
      console.log("Unhandled Error in trending articles", err);
    }
  };

  const loadMoreHandler = () => {
    dispatch(loadMoreForYouArticles());
  };

  useEffect(() => {
    fetchForYou();
  }, [currentPage]);

  return (
    <main>
      <section className="es-regular-section">
        <div className="container">
          <div className="es-add-topic-wrp">
            <Link className="btn es-add-topic-btn" to={"/topics"}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.9993 10.8333H10.8327V15C10.8327 15.4583 10.4577 15.8333 9.99935 15.8333C9.54102 15.8333 9.16602 15.4583 9.16602 15V10.8333H4.99935C4.54102 10.8333 4.16602 10.4583 4.16602 9.99996C4.16602 9.54163 4.54102 9.16663 4.99935 9.16663H9.16602V4.99996C9.16602 4.54163 9.54102 4.16663 9.99935 4.16663C10.4577 4.16663 10.8327 4.54163 10.8327 4.99996V9.16663H14.9993C15.4577 9.16663 15.8327 9.54163 15.8327 9.99996C15.8327 10.4583 15.4577 10.8333 14.9993 10.8333Z"
                  fill="#969696"
                />
              </svg>
            </Link>
            <button className="btn es-added-topic">Siz uchun</button>
            <button className="btn es-added-topic">Dasturlash</button>
            <button className="btn es-added-topic">Dasturlash</button>
            <button className="btn es-added-topic">Dasturlash</button>
            <button className="btn es-added-topic">Dasturlash</button>
            <button className="btn es-added-topic">Dasturlash</button>
            <button className="btn es-added-topic">Dasturlash</button>
            <button className="btn es-added-topic">Dasturlash</button>
            <button className="btn es-added-topic">Dasturlash</button>
            <button className="btn es-added-topic">Dasturlash</button>
          </div>
          <div className="es-section-header">
            <div className="es-section-title">
              <img src={Vector} alt="vector" />
              <span>Yangi maqolalar</span>
            </div>
          </div>
          <div className="es-regular-section">
            <div className="container">
              <div className="es-article-list">
                {articles &&
                  articles.map((x, idx) => {
                    return <ArticleCard key={"article-" + idx} article={x} />;
                  })}
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

export default AuthorizedHome;
