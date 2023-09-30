import React, { useEffect, useState } from "react";
import Icon from "../assets/img/ic_topic.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";
import ArticleCard from "../components/article-card";
import { useDispatch, useSelector } from "react-redux";
import {
  getTopicArticles,
  loadMoreTopicArticles,
} from "../store/actions/topicArticlesAction";
import {
  showAuthSignInOptions,
  showAuthSignUpOptions,
} from "../store/actions/modalAction";
import { getFollowTopics } from "../store/actions/followTopicsAction";

const Topic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [topic, setTopic] = useState(null);
  const { topicId } = useParams();
  const { articles, currentPage, pagination, limit } = useSelector(
    (state) => state.topicArticlesReducer
  );
  const { loggedIn } = useSelector((state) => state.loginReducer);
  const { followTopics } = useSelector((state) => state.followTopicsReducer);

  const loadMoreHandler = () => {
    dispatch(loadMoreTopicArticles());
  };

  const fetchFollowingTopics = async () => {
    try {
      const res = await axios.get(`/follow-topic`);
      dispatch(getFollowTopics(res?.data?.data));
    } catch (err) {
      console.log(`Unhandled Error While Fetching Follow Topics ${err}`);
    }
  };

  const fetchTopic = async () => {
    try {
      const res = await axios.get(`/topics/${topicId}`);
      setTopic(res?.data?.data?.items);
    } catch (err) {
      console.log(
        `Unhandled Error while Fetching Topic with ID: ${topicId}. Error: ${err}`
      );
    }
  };

  const fetchTopicPosts = async () => {
    try {
      const res = await axios.get(
        `/topics/posts/${topicId}?limit=${limit}&page=${currentPage}`
      );
      dispatch(getTopicArticles(res?.data));
    } catch (err) {
      console.log(
        `Unhandled Error while Fetching Topic POSTs with ID: ${topicId}. Error: ${err}`
      );
    }
  };

  const handleFollowTopic = async () => {
    if (!loggedIn) return dispatch(showAuthSignInOptions());
    try {
      const res = await axios.get(`/follow-topic/${topicId}`);
      fetchFollowingTopics();
    } catch (err) {
      console.log(
        `Unhandled Error while following topic with ID: ${topicId}. Error: ${err}`
      );
    }
  };
  const handleUnfollowTopic = async () => {
    try {
      const res = await axios.delete(`/follow-topic/${topicId}`);
      fetchFollowingTopics();
    } catch (err) {
      console.log(
        `Unhandled Error while unfollowing topic with ID: ${topicId}. Error: ${err}`
      );
    }
  };

  const handleOnWriteClick = () => {
    return loggedIn ? navigate("/write") : dispatch(showAuthSignUpOptions());
  };

  useEffect(() => {
    fetchTopic();
  }, [topicId, followTopics]);

  useEffect(() => {
    fetchTopicPosts();
    console.log(topic);
  }, [currentPage]);

  return (
    <main>
      <section className="es-regular-section">
        <div className="container">
          <div className="es-topic-wrp">
            <div className="es-topic-hl-wrp">
              <h1 className="es-topic-title">
                <img src={Icon} alt="topic" /> {topic && topic.name}
              </h1>
              {!!followTopics.find((f) => f.id === topicId) ? (
                <button
                  className="btn es-btn-primary-outline me-2"
                  onClick={handleUnfollowTopic}
                >
                  Obuna bo'lingan
                </button>
              ) : (
                <button
                  className="btn es-btn-primary me-2"
                  onClick={handleFollowTopic}
                >
                  Obuna bo'lish
                </button>
              )}
              <button
                className="btn es-btn-primary"
                onClick={handleOnWriteClick}
              >
                Yozishni boshlash
              </button>
            </div>
            <div className="es-topic-hr-wrp">
              <div className="d-flex">
                <div className="es-profile-aricles">
                  <div className="es-profile-ar-h">Hikoyalar</div>
                  <div className="es-profile-ar-n">
                    {topic && topic?.post_count}
                  </div>
                </div>
                <div className="es-profile-followers">
                  <div className="es-profile-ar-h">Yozuvchilar</div>
                  <div className="es-profile-ar-n">
                    {topic && topic?.user_count}
                  </div>
                </div>
              </div>
              <div className="es-topic-followers-img">
                {/* {topic &&
                  topic?.users?.map((user) => {
                    return (
                      <div
                        style={{ backgroundImage: `${user?.image}!important` }}
                        className="es-topic-follower-img"
                      >
                        <img src={`${user?.image}`} alt={user?.name} />
                      </div>
                    );
                  })} */}
                {/* <img src={`${topic?.users?.[0]?.image}`} alt="sss" /> */}
                <div className="es-topic-follower-img"></div>
                <div className="es-topic-follower-img"></div>
                <div className="es-topic-follower-img"></div>
                <div className="es-topic-follower-img"></div>
                <div className="es-topic-follower-img"></div>
                <div className="es-topic-follower-img"></div>
                <div className="es-topic-follower-img"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="es-regular-section">
        <div className="container">
          <div className="es-article-list">
            {articles &&
              articles.map((x, idx) => {
                return <ArticleCard key={"topic-" + idx} article={x} />;
              })}
          </div>
        </div>
        {currentPage !== pagination.totalPages && (
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
        )}
      </section>
    </main>
  );
};

export default Topic;
