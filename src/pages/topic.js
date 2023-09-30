import React, { useEffect, useState } from "react";
import Icon from "../assets/img/ic_topic.svg";
import Time from "../assets/img/ic_time.svg";
import Seen from "../assets/img/ic_seen.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";
import ArticleCard from "../components/article-card";
import { useDispatch, useSelector } from "react-redux";
import { getTopicArticles } from "../store/actions/topicArticlesAction";
import { showAuthSignUpOptions } from "../store/actions/modalAction";
import { getTopics } from "../store/actions/topicsAction";
import { getFollowTopics } from "../store/actions/followTopicsAction";

const Topic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [topic, setTopic] = useState(null);
  const { topicId } = useParams();
  const { articles } = useSelector((state) => state.topicArticlesReducer);
  const { loggedIn } = useSelector((state) => state.loginReducer);
  const { followTopics } = useSelector((state) => state.followTopicsReducer);

  const fetchFollowingTopics = async () => {
    try {
      const res = await axios.get(`/follow-topic`);
      console.log("follow-topic", res?.data?.data);
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
      const res = await axios.get(`/topics/posts/${topicId}`);
      dispatch(getTopicArticles(res?.data));
    } catch (err) {
      console.log(
        `Unhandled Error while Fetching Topic POSTs with ID: ${topicId}. Error: ${err}`
      );
    }
  };

  const handleFollowTopic = async () => {
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

  useState(() => {
    fetchTopic();
    fetchTopicPosts();
  }, [topicId, followTopics]);

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
      </section>
    </main>
  );
};

export default Topic;
