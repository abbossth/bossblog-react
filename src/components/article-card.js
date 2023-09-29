import React, { useEffect } from "react";
import Time from "../assets/img/ic_time.svg";
import Seen from "../assets/img/ic_seen.svg";
import moment from "moment/moment";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showCommentModal } from "../store/actions/modalAction";
import Ellipse from "../assets/img/ic_ellipse.svg";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "../api/axios";
import { getSavedArticles } from "../store/actions/savedArticleAction";

const ArticleCard = ({ key = "", article = {} }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isUserArticle = pathname === "/user-articles";

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`posts/${id}`);
      dispatch(
        getSavedArticles({
          posts: res?.data?.data,
          pagination: {
            page: "1",
            totalPages: 1,
            totalCount: res?.data?.data?.length,
          },
        })
      );
    } catch (err) {
      console.log(`Unhandled Error While Fetching Topics ${err}`);
    }
  };

  // useEffect(() => {
  //     handleDelete();
  // }, [article]);

  return (
    <div className="es-article-item" key={key}>
      <div className="es-article-img">
        <Link to={`/article/${article?.id}`}>
          {article?.image === "null" ? (
            <img src={require("../assets/img/article_2.jpg")} alt="article" />
          ) : (
            <img src={article?.image} alt="article" />
          )}
        </Link>
      </div>
      <div className="es-article-content">
        <div className="es-article-content-inner">
          <div>
            <div className="es-article-type">
              {
                <Link to={`/topics/${article?.postTopics?.[0]?.id}`}>
                  {article?.postTopics?.[0]?.name}
                </Link>
              }
              <span>{moment(article.createdAt).format("ll")}</span>{" "}
            </div>
            <Link to={`/article/${article?.id}`} className="es-article-title">
              {article.title}
            </Link>
            <Link to={`/article/${article?.id}`} className="es-article-info">
              {article.sub_title}
            </Link>
          </div>
          {
            <div>
              <Dropdown className="dropdown es-ellipse-dd">
                <Dropdown.Toggle className="btn es-ellipse-btn">
                  <img src={Ellipse} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                  <a class="dropdown-item es-ellipse-item" href="#">
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
                        d="M2 11.64V13.6667C2 13.8534 2.14667 14 2.33333 14H4.36C4.44667 14 4.53333 13.9667 4.59333 13.9L11.8733 6.62669L9.37333 4.12669L2.1 11.4C2.03333 11.4667 2 11.5467 2 11.64ZM13.8067 4.69335C14.0667 4.43335 14.0667 4.01335 13.8067 3.75335L12.2467 2.19335C11.9867 1.93335 11.5667 1.93335 11.3067 2.19335L10.0867 3.41335L12.5867 5.91335L13.8067 4.69335Z"
                        fill="#444"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 11.64V13.6667C2 13.8534 2.14667 14 2.33333 14H4.36C4.44667 14 4.53333 13.9667 4.59333 13.9L11.8733 6.62669L9.37333 4.12669L2.1 11.4C2.03333 11.4667 2 11.5467 2 11.64ZM13.8067 4.69335C14.0667 4.43335 14.0667 4.01335 13.8067 3.75335L12.2467 2.19335C11.9867 1.93335 11.5667 1.93335 11.3067 2.19335L10.0867 3.41335L12.5867 5.91335L13.8067 4.69335Z"
                        fill="white"
                        fill-opacity="0.4"
                      />
                    </svg>
                    Tahrirlash
                  </a>
                  <button
                    class="btn dropdown-item es-ellipse-item"
                    onClick={() => dispatch(handleDelete(article.id))}
                  >
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
                        d="M3.9987 12.6667C3.9987 13.4 4.5987 14 5.33203 14H10.6654C11.3987 14 11.9987 13.4 11.9987 12.6667V6C11.9987 5.26667 11.3987 4.66667 10.6654 4.66667H5.33203C4.5987 4.66667 3.9987 5.26667 3.9987 6V12.6667ZM5.9987 6H9.9987C10.3654 6 10.6654 6.3 10.6654 6.66667V12C10.6654 12.3667 10.3654 12.6667 9.9987 12.6667H5.9987C5.63203 12.6667 5.33203 12.3667 5.33203 12V6.66667C5.33203 6.3 5.63203 6 5.9987 6ZM10.332 2.66667L9.8587 2.19333C9.7387 2.07333 9.56536 2 9.39203 2H6.60536C6.43203 2 6.2587 2.07333 6.1387 2.19333L5.66536 2.66667H3.9987C3.63203 2.66667 3.33203 2.96667 3.33203 3.33333C3.33203 3.7 3.63203 4 3.9987 4H11.9987C12.3654 4 12.6654 3.7 12.6654 3.33333C12.6654 2.96667 12.3654 2.66667 11.9987 2.66667H10.332Z"
                        fill="#444"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.9987 12.6667C3.9987 13.4 4.5987 14 5.33203 14H10.6654C11.3987 14 11.9987 13.4 11.9987 12.6667V6C11.9987 5.26667 11.3987 4.66667 10.6654 4.66667H5.33203C4.5987 4.66667 3.9987 5.26667 3.9987 6V12.6667ZM5.9987 6H9.9987C10.3654 6 10.6654 6.3 10.6654 6.66667V12C10.6654 12.3667 10.3654 12.6667 9.9987 12.6667H5.9987C5.63203 12.6667 5.33203 12.3667 5.33203 12V6.66667C5.33203 6.3 5.63203 6 5.9987 6ZM10.332 2.66667L9.8587 2.19333C9.7387 2.07333 9.56536 2 9.39203 2H6.60536C6.43203 2 6.2587 2.07333 6.1387 2.19333L5.66536 2.66667H3.9987C3.63203 2.66667 3.33203 2.96667 3.33203 3.33333C3.33203 3.7 3.63203 4 3.9987 4H11.9987C12.3654 4 12.6654 3.7 12.6654 3.33333C12.6654 2.96667 12.3654 2.66667 11.9987 2.66667H10.332Z"
                        fill="white"
                        fill-opacity="0.4"
                      />
                    </svg>
                    O‘chirish
                  </button>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          }
        </div>
        <div className="es-article-footer">
          <div className="es-article-content-inner">
            {!isUserArticle && (
              <Link
                to={`/profile/${article?.user?.username}`}
                className="es-article-writer"
              >
                <img
                  className="img-fluid"
                  src={article?.user?.user_img}
                  alt="profile"
                />
                {article?.user?.full_name}
              </Link>
            )}
          </div>
          <div className="es-article-content-inner-sec">
            <div className="es-article-info-inner">
              <div className="es-article-r-hour">
                <img src={Time} alt="time" />{" "}
                {~~(article?.body?.readingTimes / 60)} daqiqa o‘qish
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
                {article?.body?.comments}
              </button>
              <div className="es-article-seen">
                <img src={Seen} alt="seen" />
                {article?.body?.views}
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
