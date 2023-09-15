import React from "react";
import Time from "../assets/img/ic_time.svg";
import Seen from "../assets/img/ic_seen.svg";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showCommentModal } from "../store/actions/modalAction";

const ArticleCard = ({ key = "", article = {} }) => {
  const dispatch = useDispatch();
  return (
    <div className="es-article-item" key={key}>
      <div className="es-article-img">
        <Link to={`/article/${article.id}`}>
          {article.image === "null" ? (
            <img src={require("../assets/img/article_2.jpg")} alt="article" />
          ) : (
            <img src={article.image} alt="article" />
          )}
        </Link>
      </div>
      <div className="es-article-content">
        <div className="es-article-type">
          <Link to={`/topics/${article?.postTopics?.[0]?.id}`}>
            {article?.postTopics?.[0]?.name}
          </Link>
          <span>{moment(article.createdAt).format("ll")}</span>{" "}
        </div>
        <Link to={`/article/${article?.id}`} className="es-article-title">
          {article.title}
        </Link>
        <Link to={`/article/${article?.id}`} className="es-article-info">
          {article.sub_title}
        </Link>
        <div className="es-article-footer">
          <div className="es-article-content-inner">
            <Link
              to={`/profile/${article?.user?.username}`}
              className="es-article-writer"
            >
              <img
                className="img-fluid"
                src={article.user.user_img}
                alt="profile"
              />
              {article.user.full_name}
            </Link>
          </div>
          <div className="es-article-content-inner-sec">
            <div className="es-article-info-inner">
              <div className="es-article-r-hour">
                <img src={Time} alt="time" />{" "}
                {~~(article.body.readingTimes / 60)} daqiqa o‘qish
              </div>
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
                {article.body.comments}
              </button>
              <div className="es-article-seen">
                <img src={Seen} alt="seen" />
                {article.body.views}
              </div>
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
    </div>
  );
};

export default ArticleCard;
